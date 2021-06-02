const indexTimestampFn = function (
  data: any,
  realValue: number,
  value: number
) {
  const result = data.reduce(function (r: number, a: any, i: any, aa: any) {
    return i &&
      Math.abs(aa[r].timestamp - realValue) <= Math.abs(a.timestamp - realValue)
      ? r
      : i;
  }, -1);

  if (value - data[result].timestamp >= 0) {
    return result;
  } else {
    return result - 1;
  }
};

export default indexTimestampFn;
