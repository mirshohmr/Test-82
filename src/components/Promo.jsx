import './Promo.css';
import Background from '../assets/background3.jpg';

export default function Promo() {
    return (
        <section className="promo" style={{ backgroundImage: `url(${Background})` }}>
        <div className="promo-inner">
            <div className="promo-left">
            <h1 className="promo-title">1 + 1 = 3</h1>
            <p className="promo-sub">Закажите два товара и получите третий бесплатно</p>
            <a className="promo-cta" href="/catalog">Перейти в каталог</a>
            </div>
        </div>
        </section>
    );
}
