let name = "hoellloeh";

console.log(ans(name));

function ans(name) {
  let k = name.split("").reverse().join("");

  if (name == k) return name;

  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < name.length; j++) {
      if (i != j) {
        let n = swap(name, i, j);
        if (palindrome(n)) {
          return n;
        }
      }
    }
  }
  return -1;
}

function palindrome(str) {
  let k = str.split("").reverse().join("");

  if (str == k) return true;
  else return false;
}

function swap(name, i, j) {
  let newname = name.split("");

  let temp = newname[i];
  newname[i] = newname[j];
  newname[j] = temp;

  return newname.join("");
}
