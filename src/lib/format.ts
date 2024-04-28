const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});
const numberFormatter = new Intl.NumberFormat("en-US");

export function formatCurrency(amount: number) {
  return currencyFormatter.format(amount);
}

export function formatNumber(amount: number) {
  return numberFormatter.format(amount);
}
