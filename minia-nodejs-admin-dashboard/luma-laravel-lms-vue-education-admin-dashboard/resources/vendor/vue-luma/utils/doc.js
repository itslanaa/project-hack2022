// Smooth Scroll handler methods
function easeInOutQuad(t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export function scrollTo(scroller, to, duration, cb) {
  let currentTime = 0
  const increment = 20

  const animateScroll = function() {
    currentTime += 30
    const top =
      (window.pageYOffset || scroller.scrollTop) - (scroller.clientTop || 0)
    const diff = to - top
    const val = easeInOutQuad(currentTime, top, diff, duration)
    scroller.scrollTop = Math.round(val)
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    } else if (cb && typeof cb === 'function') {
      cb()
    }
  }
  animateScroll()
}

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
export function offsetTop(el) {
  if (!el.getClientRects().length) {
    return 0
  }
  const bcr = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView
  return bcr.top + win.pageYOffset
}
