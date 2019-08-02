import React from "react";

const EmailMarketing = () => {
  return (
    <section className="section email-marketing">
      <div className="fauxpad">
        <div className="fauxpad__button fauxpad__power"></div>
        <div className="fauxpad__button fauxpad__volume fauxpad__volume--1"></div>
        <div className="fauxpad__button fauxpad__volume fauxpad__volume--2"></div>
        <div className="fauxpad__overflow">
          <div className="fauxpad__outer-frame"></div>
          <div className="fauxpad__frame"></div>
          <div className="fauxpad__background"></div>
          <div className="fauxpad__content"></div>
        </div>
      </div>
    </section>
  );
}

export default EmailMarketing;
