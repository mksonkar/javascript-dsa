function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindrome("abba"));
console.log(palindrome("acbba"));
