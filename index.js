//Your code here
function justInvoke(fn) {
  return fn()
}

setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}
