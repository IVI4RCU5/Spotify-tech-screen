function sortByStrings(s,t) {
  let result = ''
  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s[j] === t[i]) {
        result += t[i]
      }
    }
  }
  return result
}