
import "../styles/Navbar.css"
import { BiChevronDown } from "react-icons/bi";
import { TbWorldDownload } from "react-icons/tb";

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftnav">
            Symbios
        </div>

        <div className="midnav">
            <div>About</div>

            <div className="acc">
                Training
                <BiChevronDown/>
            </div>

            <div className="acc">
                LMS
                <BiChevronDown/>
            </div>

            <div className="acc">
                Consulting
                <BiChevronDown/>
            </div>

            <div>Blog</div>
        </div>

        <div className="rightnav">
            <div className="call">
                Get started
            </div>

            <div className="acc">
                <div className="profile">
                    <TbWorldDownload/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar