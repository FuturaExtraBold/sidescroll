import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap";

import Automations from "./Automations";
import Community from "./Community";
import EmailMarketing from "./EmailMarketing";
import LandingPages from "./LandingPages";
import MarketingFunnels from "./MarketingFunnels";
import MembershipSites from "./MembershipSites";
import OnlineCourses from "./OnlineCourses";
import Websites from "./Websites";

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
      let newScrollTop = $window.scrollTop() + event.originalEvent.deltaX;
      $window.scrollTop(newScrollTop);
      console.log("newScrollTop:", newScrollTop);
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
    }
    $window.on("wheel", handleWheel);

    function updateWindow() {
      console.log("updateWindow");
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();
      let holderHeight = sliderWidth - windowWidth + windowHeight;
      $holder.css("height", holderHeight + "px");
      TweenMax.to($slider, 0.5, { x: -$window.scrollTop(), ease: "easeOutExpo" });
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
