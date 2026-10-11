export const demoUser = {
  nombre: "Mariano",
  apellido: "González",
  usuario: "mariano",
  email: "mariano@email.com",
  password: "subite2026",
};

export const defaultOrigin =
  "Junín 602, T4000 San Miguel de Tucumán";

export const defaultDestination =
  "General José de San Martín 469, San Miguel de Tucumán";

export const defaultTrip = {
  origin: defaultOrigin,
  destination: "",
  category: null,
  option: null,
  payment: "credito",
};

export const routeCoords = [
  [-26.82155, -65.20535],
  [-26.82155, -65.2079],
  [-26.82435, -65.2079],
  [-26.82435, -65.21015],
  [-26.82715, -65.21015],
  [-26.82895, -65.21155],
];

export const previousLocations = [
  {
    id: "anterior-1",
    title: "Ubicación anterior 1",
    address: defaultDestination,
    center: [-26.82895, -65.21155],
  },
  {
    id: "anterior-2",
    title: "Ubicación anterior 2",
    address: "Plaza Independencia, San Miguel de Tucumán",
    center: [-26.83035, -65.20355],
  },
  {
    id: "anterior-3",
    title: "Ubicación anterior 3",
    address: "Terminal de Ómnibus, San Miguel de Tucumán",
    center: [-26.8167, -65.2108],
  },
];

export const categories = [
  { id: "auto", label: "Auto", cardLabel: "auto" },
  { id: "moto", label: "Moto", cardLabel: "moto" },
  { id: "xl", label: "XL", cardLabel: "XL" },
  { id: "confort", label: "Confort", cardLabel: "confort" },
];

export const prices = {
  auto: [
    { app: "Uber", price: 4500 },
    { app: "DiDi", price: 3900 },
    { app: "Cabify", price: 4800 },
  ],
  moto: [
    { app: "Uber", price: 2400 },
    { app: "DiDi", price: 2100 },
    { app: "Cabify", price: 2600 },
  ],
  xl: [
    { app: "Uber", price: 6800 },
    { app: "DiDi", price: 6100 },
    { app: "Cabify", price: 7200 },
  ],
  confort: [
    { app: "Uber", price: 7900 },
    { app: "DiDi", price: 7200 },
    { app: "Cabify", price: 8400 },
  ],
};

export const paymentMethods = [
  { id: "credito", label: "CRÉDITO" },
  { id: "debito", label: "DÉBITO" },
  { id: "mercadopago", label: "MERCADO PAGO" },
  { id: "efectivo", label: "EFECTIVO" },
];

export const driver = {
  name: "Viviana Gimenez",
  trips: 1200,
};

export const defaultSettings = {
  notifications: {
    push: true,
    offers: true,
    news: true,
  },
  language: "es",
  accounts: {
    Uber: true,
    DiDi: false,
    Cabify: true,
  },
};

export const languages = [
  { id: "es", label: "Español (Argentina)" },
  { id: "en", label: "Inglés" },
  { id: "fr", label: "Francés" },
];

export function formatMoney(value) {
  const [whole, decimals] = Number(value).toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${grouped},${decimals}`;
}

export function arrivalLabel(minutes = 18) {
  const date = new Date(Date.now() + minutes * 60 * 1000);
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function categoryById(id) {
  return categories.find((category) => category.id === id) ?? null;
}

export function cheapest(options) {
  return options.reduce((min, option) =>
    option.price < min.price ? option : min,
  );
}
