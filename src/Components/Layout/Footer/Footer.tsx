import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,  faTwitter,  faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (    
    <footer className="bg-[#ffb803] ">
      <section className="grid md:flex md:place-content-around grid-cols-2 pt-4 md:pt-0 w-11/12 items-baseline">
        <div className="flex flex-col">
          <h2 className="font-medium">SITEMAP</h2>
          <Link to="/" className="hover:text-white">HOME</Link>
          <Link to="about" className="hover:text-white">ABOUT</Link>
          <Link to="store" className="hover:text-white">STORE</Link>
          <Link to="gallery" className="hover:text-white">GALLERY</Link>
          <Link to="contact" className="hover:text-white">CONTACT</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">PRODUC</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Downloads</a></li>
            <li><a href="#" className="hover:text-white">Instruments</a></li>
            <li><a href="#" className="hover:text-white">Merchandising</a></li>
            <li><a href="#" className="hover:text-white">Streaming</a></li>
            <li><a href="#" className="hover:text-white">Tickets</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-medium">HELP</h2>
          <ul>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Network Status</a></li>
            <li><a href="#" className="hover:text-white">Referral Program</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-medium">SUBSCRIBE</h2>
          <label>
            <input
              className="bg-white w-8/12 border-none focus:outline-none"
              placeholder="Enter email"
              type="email"
              name="search"
              required
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
