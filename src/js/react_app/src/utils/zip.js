
const zip = (a, b) => {
  var arr = [];
  for (var key in a) arr.push([a[key], b[key]]);
  return arr;
}

export default zip
