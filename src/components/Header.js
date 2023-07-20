import React from "react";

function Header({ logo }) {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип Место Россия" className="logo" />
    </header>
  );
}

export default Header;
