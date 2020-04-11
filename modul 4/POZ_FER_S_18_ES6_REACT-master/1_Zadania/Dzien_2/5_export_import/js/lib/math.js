function integrate(fn, a, b, eps = 1e-4) {
  let res = 0;
  for(let i = a; i < b; i+=eps) {
    res += fn(i);
  }
  return res * eps;
}

function derivative(fn, x, eps = 1e-4) {
  return (fn(x + eps) - fn(x)) / eps
}

const MathOperations  = {
   integrate,
  derivative
};

module.exports = MathOperations;