import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Promo from "./components/Promo";
import Cards from "./components/Cards";
import ProductSwiper from './components/Swiper';
import ProductSwiper2 from './components/Swiper2';
import { products } from './data/Cards';
import "./App.css";

function App() {
    return (
        <div className="hero-wrapper">
            <Navbar />
            <Hero />
            <Cards />
            <ProductSwiper products={products} />
            <ProductSwiper2 />
            <Promo />
        </div>
    );
}

export default App;