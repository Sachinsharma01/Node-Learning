// console.log(process.argv[2])
function print(item) {
  return () => 0;
}

console.log(print(10));
arr = ["4", "6", "true", true, 34, false];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + arr[i + 1]);
}
