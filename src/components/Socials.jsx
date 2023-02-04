
import "../styles/Socials.css"
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

function Socials() {
  return (
    <div className="socials">
        <div className="icons">
            <div className="icon">
                <AiFillInstagram/>
            </div>
            <p>Instagram</p>
        </div>
        <div className="icons">
            <div className="icon">
                <BsFacebook/>
            </div>
            <p>Facebook</p>
        </div>
        <div className="icons">
            <div className="icon">
                <BsTwitter/>
            </div>
            <p>Twitter</p>
        </div>

        <div className="icons2">
            <div className="icon">
                <MdOutlineLogin/>
            </div>
            <p>Login</p>
        </div>
    </div>
  )
}

export default Socials