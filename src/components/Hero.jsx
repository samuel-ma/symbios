
import "../styles/Hero.css"
import hero from "../assets/banner (3).webp"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Hero() {
  return (
    <div className="hero">
        <div className="arrow-left">
            <MdChevronLeft/>
        </div>

        <div className="hero-img">
            <img className="hero-im" src={hero} alt="hero" />
        </div>

        <div className="arrow-right">
            <MdChevronRight/>
        </div>

    </div>
  )
}

export default Hero