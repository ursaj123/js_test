function is_palindrome(s) {
  let n = s.length;
  let ok = 1;
  for (let i = 0; i < n / 2; i++) {
    if (s[i] != s[n - i - 1]) {
      ok = 0;
    }
  }
  return ok;
}
var str = process.argv[2];
var ans = is_palindrome(str);
if (ans == 1) {
  console.log("Yes");
} else {
  console.log("No");
}
