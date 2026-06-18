export function updateMarketPrice(base: number, demand: number) {
  return base * (1 + demand * 0.1);
}
