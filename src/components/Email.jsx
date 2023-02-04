
import "../styles/Email.css"
import { BsArrowRightCircle } from "react-icons/bs";

function Email() {
  return (
    <div className="email">
        <h1>Sign up to our news letter</h1>
        <div className="elist">
            <input className="input" placeholder="Enter your work email"/>
            <button className="get">
                <p className="early">Submit</p>
                <BsArrowRightCircle/>
            </button>
        </div>
        <p className="join">Join our waitlist to receive daily updates</p>
    </div>
  )
}

export default Email