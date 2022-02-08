export function numberFormat(number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(number);
}

export function dateFormat(date) {
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
}
