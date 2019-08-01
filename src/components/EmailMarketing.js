import React from "react";

const EmailMarketing = () => {
  const imgUrl = require(`../assets/images/ipad.png`);
  return (
    <section className="section email-marketing">
      <div className="fauxpad">
        <div className="fauxpad__overflow">
          <div className="fauxpad__outer-frame"></div>
          <div className="fauxpad__frame"></div>
          <div className="fauxpad__background"></div>
          <div className="fauxpad__content"></div>
        </div>
      </div>
      {/* <img className="email-marketing__image" src={ imgUrl } /> */}
    </section>
  );
}

export default EmailMarketing;
