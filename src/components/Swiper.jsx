import { useState } from 'react';
import cards from "../data/Cards.js";
import "./Cards.css";
import Background from "../assets/background2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Cards() {
    return (
        <section className="cards" style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <h2 className="cards-title">ЛУЧШИЕ ПРОДАЖИ</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
                navigation
                pagination={{ clickable: true }}
                className="cards-grid swiper-grid"
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <ProductCard card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Cards;

function ProductCard({ card }) {
    const [liked, setLiked] = useState(false);
    const [animate, setAnimate] = useState(false);

    function toggle() {
        setLiked((s) => !s);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 420);
    }

    return (
        <div className="card">
            <div className="card-image-wrap">
                <img src={card.image} alt={card.title} className="card-image" />
                <button
                    className={`like-btn ${liked ? 'active' : ''} ${animate ? 'animate' : ''}`}
                    onClick={toggle}
                    aria-label="Добавить в избранное"
                >
                    <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.35-9.5-8.5C.8 9 2.5 5 6.5 5c2 0 3.5 1.2 4.2 2.8L12 9.3l1.3-1.5C14 6.2 15.5 5 17.5 5 21.5 5 23.2 9 21.5 12.5 19 16.65 12 21 12 21z"/></svg>
                </button>
            </div>
            <div className="card-info">
                <div className="card-title">{card.title}</div>
                <div className="card-price">{card.price} грн</div>
            </div>
        </div>
    );
}