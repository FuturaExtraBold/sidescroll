function cbHandleWheel(event) {
  var e = window.event || event;
  let delta = -e.wheelDelta || -e.detail;
  let newScrollTop = $window.scrollTop() + delta;
  $window.scrollTop(newScrollTop);
  console.log("newScrollTop:", newScrollTop);
  TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
}

let addMouseWheelEventListener = function(scrollHandler) {
  if (window.addEventListener) {
    window.addEventListener("mousewheel", scrollHandler, false); // IE9+, Chrome, Safari, Opera
    window.addEventListener("DOMMouseScroll", scrollHandler, false); // Firefox
  } else {
    window.attachEvent("onmousewheel", scrollHandler); // IE 6/7/8
  }
}
addMouseWheelEventListener(cbHandleWheel);
