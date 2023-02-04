
import "../styles/Hero2.css"
import sharing from "../assets/sharing.png"

function Hero2() {
  return (
    <div className="hero2">
        <div className="hero-left">
            <h1 className="better">Better</h1>
            <h1 className="better">Data.</h1>
            <h1 className="better">Scalable AI.</h1>
        </div>

        <div className="hero-right">
            <img className="sharing" src={sharing} alt="sharing" />
        </div>
    </div>
  )
}

export default Hero2