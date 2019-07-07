//Your code here
function justInvoke(fn) {
  return fn()
}

setThisWithCall(fn, thisValue, arg) {
  fn.call(thisValue, arg)
}
