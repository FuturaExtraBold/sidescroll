import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import Automations from "./Automations";
import CenterGuide from "./CenterGuide";
import Community from "./Community";
import EmailMarketing from "./EmailMarketing";
import Hero from "./Hero";
import ItAll from "./ItAll";
import LandingPages from "./LandingPages";
import MarketingFunnels from "./MarketingFunnels";
import MembershipSites from "./MembershipSites";
import OnlineCourses from "./OnlineCourses";
import SplashVideo from "./SplashVideo";
import Websites from "./Websites";

class Carousel extends Component {

  componentDidMount() {
    console.log("componentDidMount");

    let $window = $(window);
    let windowWidth, windowHeight;

    let $holder = $(".slider");
    let $slider = $(".slider__content");
    let $sections = $(".section");
    let $overlay = $(".slider__overlay");

    let sliderWidth = 0;
    let holderHeight = 0;

    function initialScroll() {
      console.log("initialScroll");
      let str = window.location.pathname.split("/")[1];
      if (str !== "") {
        TweenMax.to($window, 1, { scrollTo: $("." + str).position().left, ease: "easeInOutExpo", delay: 1 });
      }
    }

    function handleScroll() {
      console.log("handleScroll", $window.scrollTop());
      $window.off("touchstart");
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
    }

    function updateWindow() {
      console.log("updateWindow");
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();
      if (windowWidth > 768) {
        console.log("window is over!");
        sliderWidth = 0;
        $sections.each((index) => {
          sliderWidth += $sections.eq(index).outerWidth();
        });
        $slider.css("width", sliderWidth + "px");
        holderHeight = sliderWidth - windowWidth + windowHeight;
        $holder.css("height", holderHeight + "px");
      } else {
        console.log("window is under!");
        $window.off("scroll");
        $slider.removeAttr("style");
        $holder.removeAttr("style");
      }
    }

    function resetWindow() {
      console.log("resetWindow");
      $window.scrollTop(0);
    }

    function handleMouseMove() {
      console.log("mousemove");
    }

    let initialX = 0;
    let switchX = 0;
    let previousX = 0;
    let currentX = 0;
    let offsetX = 0;
    let ticker = 0;
    let deltaX = 0;
    let previousScrollDirection = 0;
    let currentScrollDirection = 0;
    let sliderX = 0;
    function handleTouchStart(event) {
      $(".indicator--start").css("background-color", "red");
      $window.off("scroll");
      $window.off("touchstart");
      $window.on("touchmove", handleTouchMove);
      $window.on("touchend", handleTouchEnd);
      offsetX = windowWidth / 2;
      initialX = Math.round(event.touches[0].clientX);
      ticker = 0;
      console.log("handleTouchStart :: initialX:", initialX, "currentX:", currentX);
    }

    function handleTouchMove(event) {
      $(".indicator--move").css("background-color", "red");
      event.preventDefault();
      ticker ++;
      previousX = Math.round(event.touches[0].clientX - offsetX);

      if (previousX > currentX) currentScrollDirection = 1;
      else if (previousX < currentX) currentScrollDirection = 0;
      if (previousScrollDirection != currentScrollDirection) {
        ticker = 0;
        switchX = currentX;
      }
      previousScrollDirection = currentScrollDirection;

      currentX = Math.round(event.touches[0].clientX - initialX);
      TweenMax.set($slider, { x: currentX - sliderX });
      console.log("handleTouchMove ::: initialX:", initialX, "previousX:", previousX, "currentX:", currentX, "sliderX:", sliderX);
    }

    function handleTouchEnd() {
      $window.off("touchend");
      $window.off("touchmove");
      $window.on("touchstart", handleTouchStart);
      $(".indicator--end").css("background-color", "red");
      setTimeout(() => {
        $(".indicator").css("background-color", "rebeccapurple");
      }, 100);
      deltaX = switchX - currentX * 4;
      sliderX -= currentX - deltaX;
      sliderX = Math.max(sliderX, 0);
      sliderX = Math.min(sliderX, holderHeight - windowHeight);
      TweenMax.to($slider, 1, { x: -sliderX, ease: "easeOutExpo" });
      console.log("handleTouchEnd :::: deltaX:", deltaX, "ticker:", ticker, "sliderX:", sliderX);
    }

    $window.on("beforeunload", resetWindow);
    $window.on("resize", updateWindow);

    if ($("html").hasClass("touchevents")) {
      console.log("has touchevents");
      $window.on("touchstart", handleTouchStart);
    } else {
      console.log("doesn't have touchevents");
      $window.on("scroll", handleScroll);
    }

    TweenMax.to($overlay, 1, { opacity: 0.6, delay: 1 });

    resetWindow();
    updateWindow();
    initialScroll();
  }

  render() {
    return (
      <div className="slider">
        <div className="slider__fixed">
          <div className="indicator indicator--start">Start</div>
          <div className="indicator indicator--move">Move</div>
          <div className="indicator indicator--end">End</div>
          <SplashVideo />
          <div className="slider__overlay"></div>
          <CenterGuide />
          <div className="slider__content">
            <Hero />
            <OnlineCourses />
            <EmailMarketing />
            <Websites />
            <LandingPages />
            <Community />
            <Automations />
            <MarketingFunnels />
            <MembershipSites />
            <ItAll />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
