
import "../styles/Footer.css"
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>

        <div className='footer1'>
            
            <div className='flinks'>
                <h1>ABOUT US</h1>
                <a href="_blank">Our Team</a>
                <a href="_blank">Our partners</a>
                <a href="_blank">Social Responsibility</a>
                <a href="_blank">Library</a>
            </div>
            
            <div className='flinks'>
                <h1>CLIENTS</h1>
                <a href="_blank">Industries</a>
                <a href="_blank">Our clients</a>
                <a href="_blank">Clients Testimonials</a>
                <a href="_blank">Success stories</a>
            </div>
            
            <div className='flinks'>
                <h1>ABOUT US</h1>
                <a href="_blank">Our Team</a>
                <a href="_blank">Our partners</a>
                <a href="_blank">Social Responsibility</a>
                <a href="_blank">Library</a>
            </div>
            
            <div className='flinks'>
                <h1>CONTACTS</h1>
                <a href="_blank">Our Team</a>
                <a href="_blank">Our partners</a>
                <a href="_blank">Social Responsibility</a>
                <a href="_blank">Library</a>
                <div className="ficons">
                    <a href="" className="fficon">
                        <BsFacebook/>
                    </a>
                    <a href="" className="fficon">
                        <BsTwitter/>
                    </a>
                    <a href="" className="fficon">
                        <AiFillInstagram/>
                    </a>
                </div>
            </div>
        </div>

        <div className='footer2'>

            <a href="https://github.com/samuel-ma" className="samuel">
                Created with 💖 by Samuel-ma
            </a>

            <a href="">
                Copyright © 2023 Symbios Consulting. All rights reserved.
            </a>
        </div>

    </div>
  )
}

export default Footer