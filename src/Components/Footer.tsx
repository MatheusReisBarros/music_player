import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,  faTwitter,  faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (    
    <footer className="bg-[#ffb803] ">
      <section className="grid grid-cols-2 pt-4 w-11/12">
        <div className="flex flex-col">
          <h2>SITEMAP</h2>
          <Link to="/" className="hover:text-white">HOME</Link>
          <Link to="about" className="hover:text-white">ABOUT</Link>
          <Link to="package" className="hover:text-white">PACKAGE</Link>
          <Link to="gallery" className="hover:text-white">GALlERY</Link>
          <Link to="contact" className="hover:text-white">CONTACT</Link>
        </div>
        <div className="flex flex-col">
          <h2>PRODUC</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Downloads</a></li>
            <li><a href="#" className="hover:text-white">Instruments</a></li>
            <li><a href="#" className="hover:text-white">Merchandising</a></li>
            <li><a href="#" className="hover:text-white">Streaming</a></li>
            <li><a href="#" className="hover:text-white">Tickets</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2>HELP</h2>
          <ul>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Network Status</a></li>
            <li><a href="#" className="hover:text-white">Referral Program</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="">SUBSCRIBE</h2>
          <label>
            <input
              className="bg-white w-8/12"
              placeholder="Enter email"
              type="email"
              name="search"
              prettier-ignore
            />
            <button className="bg-black text-white">SEND</button>
          </label>
          <div className="bg-primary-color">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </section>
      <div className="h-10 bg-black text-white justify-center flex items-center">
        <span>TuneZone © {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
