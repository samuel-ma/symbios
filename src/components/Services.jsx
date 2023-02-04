import "../styles/Services.css";
import services from "../assets/services (1).jpg";
import services2 from "../assets/services (3).jpg";
import services3 from "../assets/services (4).jpg";
import { IoLogoBitbucket } from "react-icons/io";

function Services() {
  return (
    <div className="content">
        <div className="success">
            <div className="success1">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit quis optio facere accusantium temporibus error, ipsum consectetur praesentium aspernatur et sequi culpa aut eligendi nisi dolorem quidem omnis? Nulla!</p>
            </div>

            <div className="view">
                View More
            </div>
        </div>

        <div className="services">

          <div className="service">
            <img className="s-img" src={services} alt="services" />
            <div className="s-logo">
              <IoLogoBitbucket />
            </div>
    
            <div className="details">
              <div>
                <h1 className="zip">Operational Services</h1>
              </div>
    
              <div className="raised">Raised $50M</div>
            </div>

            <div className="s-links">

                <a href="_blank" className="lead">Lean</a>
                <a href="_blank" className="lead">Six Sigma</a>
                <a href="_blank" className="lead">20 Keys</a>
                <a href="_blank" className="lead">Cost Cutting Strategy</a>
                <a href="_blank" className="lead">Business Process Re-Engineering</a>
                <a href="_blank" className="lead">Capability Building $ Training</a>
              </div>
          </div>

          <div className="service">
            <img className="s-img" src={services2} alt="services" />
            <div className="ss-logo">
              <IoLogoBitbucket />
            </div>
    
            <div className="details">
              <div>
                <h1 className="zip">Supply Chain Services</h1>
              </div>
    
              <div className="raised">Raised $50M</div>
            </div>

            <div className="s-links">

                <a href="_blank" className="lead">Lean</a>
                <a href="_blank" className="lead">Six Sigma</a>
                <a href="_blank" className="lead">20 Keys</a>
                <a href="_blank" className="lead">Cost Cutting Strategy</a>
                <a href="_blank" className="lead">Business Process Re-Engineering</a>
                <a href="_blank" className="lead">Capability Building $ Training</a>
              </div>
          </div>

          <div className="service">
            <img className="s-img" src={services3} alt="services" />
            <div className="sss-logo">
              <IoLogoBitbucket />
            </div>
    
            <div className="details">
              <div>
                <h1 className="zip">Digital Services</h1>
              </div>
    
              <div className="raised">Raised $50M</div>
            </div>

            <div className="s-links">

                <a href="_blank" className="lead">Lean</a>
                <a href="_blank" className="lead">Six Sigma</a>
                <a href="_blank" className="lead">20 Keys</a>
                <a href="_blank" className="lead">Cost Cutting Strategy</a>
                <a href="_blank" className="lead">Business Process Re-Engineering</a>
                <a href="_blank" className="lead">Capability Building $ Training</a>
              </div>
          </div>
  
        </div>
    </div>
  );
}

export default Services;
