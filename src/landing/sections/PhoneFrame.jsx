export default function PhoneFrame({ src, alt, className = "", priority = false }) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border-[7px] border-ink bg-white shadow-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        width="390"
        height="844"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block aspect-[390/844] w-full object-cover object-top"
      />
    </div>
  );
}
