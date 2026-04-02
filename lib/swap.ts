export async function getSwap(from, to, amount) {
  return {
    dex: "Uniswap V3",
    from,
    to,
    amount,
    estimatedOut: amount * 0.98,
    fee: "0.3%"
  };
}