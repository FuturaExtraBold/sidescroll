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

    function handleWheel(evt) {
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
    }

    function updateWindow() {
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();
      let holderHeight = sliderWidth - windowWidth + windowHeight;
      $holder.css("height", holderHeight + "px");
    }

    $window.on("wheel", handleWheel);
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
            <section className="section"></section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
