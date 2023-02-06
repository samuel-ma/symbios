
import "../styles/Trainees.css"
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function Trainees() {
  return (
    <div className="train">
        <div className="trainees">
            <div className="t-icons">
                <AiFillInstagram/>
            </div>
            
            <h1>Stay up to date</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit, porro deserunt exercitationem dolor reiciendis odio alias reprehenderit. Esse possimus deleniti natus exercitationem ut placeat</p>
        </div>

        <div className="trainees2">
            <div className="t-icons">
                <BsTwitter/>
            </div>

            <h1>Stay up to date</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit, porro deserunt exercitationem dolor reiciendis odio alias reprehenderit. Esse possimus deleniti natus exercitationem ut placeat</p>
        </div>
    </div>
  )
}

export default Trainees