import React, { Component } from "react";
// import { BrowserRouter, Route, Redirect } from "react-router-dom";
import $ from "jquery";
import TweenMax from "gsap";

import Automations from "./Automations";
import Community from "./Community";
import EmailMarketing from "./EmailMarketing";
import ItAll from "./ItAll";
import LandingPages from "./LandingPages";
import MarketingFunnels from "./MarketingFunnels";
import MembershipSites from "./MembershipSites";
import OnlineCourses from "./OnlineCourses";
import Websites from "./Websites";

class Carousel extends Component {

  componentDidMount() {
    let $document = $(document);
    let $window = $(window);
    let windowWidth, windowHeight;

    let $holder = $(".holder");
    let $slider = $(".slider");
    let $sections = $(".section");

    function handleScroll(event) {
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
    }
    $window.on("scroll", handleScroll);

    function updateWindow() {
      console.log("updateWindow");
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();

      let sliderWidth = 0;
      $sections.each((index) => {
        sliderWidth += $sections.eq(index).outerWidth();
      });
      $slider.css("width", sliderWidth + "px");

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
