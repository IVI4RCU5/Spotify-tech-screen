function changePossibilities(amount, denominations) {
  let combos = 0
  let denoms = denominations.slice().sort((a, b) => b - a)
  let recurse = function(currentSum, coinIndex) {
    if (currentSum === amount) {
      combos++
    } else if (currentSum + denoms[coinIndex] <= amount) {
      recurse(currentSum + denoms[coinIndex], coinIndex)
      recurse(currentSum, coinIndex + 1)
    } else if (coinIndex < denoms.length) {
      recurse(currentSum, coinIndex + 1)
    }
  }
  recurse(0, 0)
  return combos
}