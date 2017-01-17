function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
  }
}

function doubler(number) {
  return createMultiplier(2)(number)
}

function tripler(number) {
  return createMultiplier(3)(number)
}

function multiplier(first, second) {
  return first * second
}

function doublerWithBind() {
  return multipler.bind(2)
}

function triplerWithBind() {
  return multipler.bind(3)
}
