function decodeString(s) {
  if (s.indexOf('[') < 0) return s
  let num = s.indexOf('[') - 1
  let start = s.indexOf('[') + 1
  let end = s.length - s.split('').reverse().indexOf(']') - 1
  return s.substring(0, num) + decodeString(s.substring(start, end)).repeat(s[num])
}