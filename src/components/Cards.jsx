import cards from "../data/Cards.js";
import "./Cards.css";

function Cards() {
    return (
        <section className="cards">
            <h2 className="cards-title">Наша продукция</h2>
            <div className="cards-grid">
                {cards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card-image-wrap">
                            <img src={card.image} alt={`Товар ${card.id}`} className="card-image" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Cards;