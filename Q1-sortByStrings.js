function sortByStrings(s,t) {
  let result = ''
  let storage = {}
  for (var i = 0; i < s.length; i++) {
    if (storage[s[i]]) {
      storage[s[i]]++
    } else {
      storage[s[i]] = 1
    }
  }
  for (var j = 0; j < t.length; j++) {
    if (storage[t[j]]) {
      result += t[j].repeat(storage[t[j]])
    }
  }
  return result
}