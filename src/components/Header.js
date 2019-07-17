import React from "react";

import { ReactComponent as KajabiLogo } from "../assets/images/ui/kajabi_logo_k.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <KajabiLogo />
        </div>
      </div>
    </header>
  );
}

export default Header;
