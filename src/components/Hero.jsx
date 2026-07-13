import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 className="hero-title">Хит продаж</h1>
            <div className="hero-divider" />

                <h2 className="hero-subtitle">Дистиллятор для <br /> эфирных масел</h2>

            <div className="hero-price">
                <span className="hero-price-label">Цена</span>
                <span className="hero-price-value">4 906 грн</span>
            </div>

                <button className="hero-button">Купить</button>
            </div>
        </section>
    );
}

export default Hero;