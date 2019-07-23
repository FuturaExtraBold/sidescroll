import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import Automations from "./Automations";
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
        let sliderWidth = 0;
        $sections.each((index) => {
          sliderWidth += $sections.eq(index).outerWidth();
        });
        $slider.css("width", sliderWidth + "px");
        let holderHeight = sliderWidth - windowWidth + windowHeight;
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
    let previousX = 0;
    let currentX = 0;
    let xOffset = 0;
    let ticker = 0;
    let deltaX = 0;
    let previousScrollDirection = 0;
    let currentScrollDirection = 0;
    let scrollingForward = true;
    function handleTouchStart(event) {
      $(".indicator--start").css("background-color", "red");
      $window.off("scroll");
      $window.off("touchstart");
      $window.on("touchmove", handleTouchMove);
      $window.on("touchend", handleTouchEnd);
      initialX = Math.round(event.touches[0].clientX);
      ticker = 0;
      console.log("handleTouchStart :: initialX:", initialX, "currentX:", currentX, "xOffset:", xOffset);
    }

    function handleTouchMove(event) {
      $(".indicator--move").css("background-color", "red");
      event.preventDefault();
      ticker ++;
      previousX = Math.round(event.touches[0].clientX);
      if (previousX >= currentX) {
        currentScrollDirection = 1;
      } else {
        currentScrollDirection = 0;
      }
      if (previousScrollDirection != currentScrollDirection) {
        console.log("scroll direction changed!");
        ticker = 0;
      }
      previousScrollDirection = currentScrollDirection;
      currentX = Math.round(event.touches[0].clientX);
      TweenMax.set($slider, { x: currentX });
      console.log("handleTouchMove ::: initialX:", initialX, "currentX:", currentX, "xOffset:", xOffset, "scrollingForward:", scrollingForward);
    }

    function handleTouchEnd() {
      $window.off("touchend");
      $window.off("touchmove");
      $window.on("touchstart", handleTouchStart);
      $(".indicator--end").css("background-color", "red");
      $(".indicator").css("background-color", "rebeccapurple");
      // initialX = currentX;
      console.log("handleTouchEnd :::: initialX:", initialX, "currentX:", currentX, "xOffset:", xOffset, "ticker:", ticker);
    }

    $window.on("beforeunload", resetWindow);
    $window.on("resize", updateWindow);

    // function check

    if ($("html").hasClass("touchevents")) {
      console.log("has touchevents");
      $window.on("touchstart", handleTouchStart);
    } else {
      console.log("doesn't have touchevents");
      $window.on("scroll", handleScroll);
    }

    TweenMax.to($overlay, 1, { opacity: 0, delay: 1 });

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
