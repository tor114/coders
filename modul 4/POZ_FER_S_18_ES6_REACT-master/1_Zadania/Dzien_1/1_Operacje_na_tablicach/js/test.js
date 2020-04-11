function integrate(fn, a, b, eps = 1e-4) {
  let res = 0;
  for(let i = a; i < b; i+=eps) {
    res += fn(i);
  }
  return res * eps;
}