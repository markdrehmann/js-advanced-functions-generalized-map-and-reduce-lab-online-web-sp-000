function map(source, callback) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    let el = source[i]
    result.push(callback(el))
  }
  return result
}

function reduce(source, callback, start) {
  let result = !!start ? start : source[0]
  let i = !!start ? 0 : 1

  for (; i < source.length; i++) {
    result = callback(source[i], result)
  }
  return result
}