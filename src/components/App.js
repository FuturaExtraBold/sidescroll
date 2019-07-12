import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap";

class App extends Component {

  componentDidMount() {
    let $window = $(window);
    let windowWidth, windowHeight;

    let $holder = $(".holder");
    let $slider = $(".slider");
    let $sections = $(".section");

    let sliderWidth = 0;
    $sections.each((index) => {
      sliderWidth += $sections.eq(index).outerWidth();
    });
    $slider.css("width", sliderWidth + "px");

    function handleWheel(event) {

      // var e = window.event || event;
      // let delta = -e.wheelDelta || -e.detail;
      // let newScrollTop = $window.scrollTop() + delta;
      // $window.scrollTop(newScrollTop);
      // console.log("newScrollTop:", newScrollTop);
      // TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });

      let newScrollTop = $window.scrollTop() + event.originalEvent.deltaX;
      $window.scrollTop(newScrollTop);
      console.log("newScrollTop:", newScrollTop);
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
    }
    $window.on("wheel", handleWheel);

    // let addMouseWheelEventListener = function(scrollHandler) {
    //   if (window.addEventListener) {
    //     window.addEventListener("mousewheel", scrollHandler, false); // IE9+, Chrome, Safari, Opera
    //     window.addEventListener("DOMMouseScroll", scrollHandler, false); // Firefox
    //   } else {
    //     window.attachEvent("onmousewheel", scrollHandler); // IE 6/7/8
    //   }
    // }
    // addMouseWheelEventListener(handleWheel);

    function updateWindow() {
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();
      let holderHeight = sliderWidth - windowWidth + windowHeight;
      $holder.css("height", holderHeight + "px");
    }
    $window.on("resize", updateWindow);
    updateWindow();
  }

  render() {
    return (
      <div className="holder">
        <div className="fixer">
          <div className="slider">
            <section className="section"></section>
            <section className="section"></section>
            <section className="section"></section>
            <section className="section"></section>
            <section className="section">
              <h1 className="section__title">Kajabi does it all.</h1>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
