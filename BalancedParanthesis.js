let expr = "[()";

answer(expr);

function answer(expr) {
  if (balanced(expr)) {
    console.log("Balanced");
  } else {
    console.log("Not Balanced");
  }
}

function balanced(expr) {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "[" || x == "{" || x == "(") {
      stack.push(x);
    }

    let check;

    switch (x) {
      case "]":
        check = stack.pop();
        if (check == "{" || check == "(") {
          return false;
        }
        break;
      case "}":
         check = stack.pop();
        if (check == "[" || check == "(") {
          return false;
        }
        break;
        case ")":
             check = stack.pop();
        if (check == "{" || check == "[") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
}
