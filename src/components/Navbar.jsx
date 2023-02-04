
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
            <div className="acc2">
                <a href="_blank">About</a>
            </div>

            <div className="acc">
                <a href="_blank">Training</a>
                <BiChevronDown/>
            </div>

            <div className="acc">
                <a href="_blank">LMS</a>
                <BiChevronDown/>
            </div>

            <div className="acc">
                <a href="_blank">Consulting</a>
                <BiChevronDown/>
            </div>

            <div className="acc2">
                <a href="_blank">Blog</a>
            </div>
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