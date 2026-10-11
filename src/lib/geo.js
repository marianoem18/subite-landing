function toRad(deg) {
  return (deg * Math.PI) / 180;
}

export function distanceMeters(a, b) {
  const lat = (a[0] - b[0]) * 111320;
  const lng =
    (a[1] - b[1]) *
    111320 *
    Math.cos(toRad((a[0] + b[0]) / 2));
  return Math.hypot(lat, lng);
}

export function bearingDegrees(a, b) {
  const y = Math.sin(toRad(b[1] - a[1])) * Math.cos(toRad(b[0]));
  const x =
    Math.cos(toRad(a[0])) * Math.sin(toRad(b[0])) -
    Math.sin(toRad(a[0])) *
      Math.cos(toRad(b[0])) *
      Math.cos(toRad(b[1] - a[1]));
  return (Math.atan2(y, x) * 180) / Math.PI;
}

export function pointAlong(coords, t) {
  if (!coords?.length) return null;
  if (coords.length === 1) return { point: coords[0], bearing: 0 };

  const lengths = [];
  let total = 0;
  for (let i = 0; i < coords.length - 1; i += 1) {
    const length = distanceMeters(coords[i], coords[i + 1]);
    lengths.push(length);
    total += length;
  }

  let remain = Math.min(1, Math.max(0, t)) * total;
  for (let i = 0; i < lengths.length; i += 1) {
    const length = lengths[i];
    if (remain <= length || i === lengths.length - 1) {
      const fraction = length === 0 ? 0 : Math.min(1, remain / length);
      const start = coords[i];
      const end = coords[i + 1];
      return {
        point: [
          start[0] + (end[0] - start[0]) * fraction,
          start[1] + (end[1] - start[1]) * fraction,
        ],
        bearing: bearingDegrees(start, end),
      };
    }
    remain -= length;
  }

  return { point: coords[coords.length - 1], bearing: 0 };
}
