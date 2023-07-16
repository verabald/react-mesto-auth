import logo from "../images/header-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <a className="header__link" href="#">
        <img className="header__logo" src={logo} alt="Логотип Место Россия"/>
      </a>
    </header>
  );
}
