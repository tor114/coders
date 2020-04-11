function runInterval(n = 8) {
  if(n < 1 || n > 10 || !(n % 1 === 0) ) throw new Error('Invalid argument');

  let counter = 0;

  const interval = setInterval(() => {
    console.log("Hello");
    if(++counter >= n) clearInterval(interval);
  }, 500);
}

runInterval(-5);