import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

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
    console.log("componentDidMount");

    let $window = $(window);
    let windowWidth, windowHeight;

    let $holder = $(".holder");
    let $slider = $(".slider");
    let $sections = $(".section");

    function initialScroll() {
      console.log("initialScroll");
      let str = window.location.pathname.split("/")[1];
      if (str !== "") {
        TweenMax.to($window, 1, { scrollTo: $("." + str).position().left, ease: "easeInOutExpo", delay: 1 });
      }
    }

    function handleScroll() {
      console.log("handleScroll", $window.scrollTop());
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

    $window.on("beforeunload", resetWindow);
    $window.on("resize", updateWindow);
    $window.on("scroll", handleScroll);

    resetWindow();
    updateWindow();
    initialScroll();
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
