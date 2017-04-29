/**
 * Created by CharlieShi on 4/28/17.
 */

export function throttle(fn, wait) {
  //wait in milliseconds
  let time = Date.now();

  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now()
    }
  }
}
