function foo(y) {
  let x = 1;
  console.log("MY_CUSTOM_TEXT");
  return x**y;
}

function bar() {
  let x = f();
}

function baz() {
  let x = 1;
  console.log(x);

  function unused() {
    return 5;
  }
}

foo(3);