var decodeString = function(s) {
  if (s.indexOf('[') < 0) return s
  let brackets = 0
  let substrings = []
  let pointer = 0
  for (var i = 0; i < s.length; i++) {
      if (s[i] === '[') {
          brackets++
      } else if (s[i] === ']') {
          brackets--
          if (brackets === 0) {
              substrings.push(s.slice(pointer, i+1))
              pointer = i+1
          }
      }
  }
  let tail = s.slice(pointer)
  return substrings.map((substr) => {
      let openBracket = substr.indexOf('[')
      let closeBracket = substr.length - substr.split('').reverse().indexOf(']') - 1
      let prefix = ''
      let num = ''
      substr.slice(0, openBracket).split('').forEach((el) => {
          if (parseInt(el) >= 0) {
              num += el
          } else {
              prefix += el
          }
      })
      return prefix + decodeString(substr.substring(openBracket+1, closeBracket)).repeat(parseInt(num))
  }).join('') + tail
};