let input = 7;

let ot = 4221;

answer(ot);

function answer(n) {
  let rev_num = 0;

  while (n > 0) {
    rev_num = rev_num * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(rev_num);
}
