import logo from "../assets/logos.png";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Copper Pro" className="navbar-logo-icon" />
            </div>
            <nav className="navbar-menu">
                <a href="#" className="navbar-link navbar-link--active">
                    Каталог
                </a>
                <a href="#" className="navbar-link">
                    Новости
                </a>
                <a href="#" className="navbar-link">
                    Доставка
                </a>
                <a href="#" className="navbar-link">
                    О нас
                </a>
                <a href="#" className="navbar-link">
                    Контакты
                </a>
            </nav>
        </header>
    );
}

export default Navbar;