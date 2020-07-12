
let foo = function (req, res, next) {
  return ('foo');
}
let foo2 = function (req, res, next) {
  return ('foo2');
}

let bar = function (req, res, next) {
  return foo();
}

module.exports = {
  foo: foo,
  foo2:foo2,
  bar: bar
}