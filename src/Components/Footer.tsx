import { Link } from "react-router-dom";

/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; */

const Footer = () => {
  return (
    /* <div className="bg-primary-color">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
    </div> */
    <footer className="bg-primary-color">
      <section className="flex items-center justify-around">
        <div className="flex flex-col">
          <h2>SITEMAP</h2>
          <Link to="/" className="hover:text-white">
            HOME
          </Link>
          <Link to="about" className="hover:text-white">
            ABOUT
          </Link>
          <Link to="package" className="hover:text-white">
            PACKAGE
          </Link>
          <Link to="galery" className="hover:text-white">
            GALERY
          </Link>
          <Link to="contact" className="hover:text-white">
            CONTACT
          </Link>
        </div>
        <div className="flex flex-col">
          <h2>PRODUC</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Downloads
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instruments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Merchandising
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Streaming
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tickets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>HELP</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Network Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Referral Program
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-600">SUBSCRIBE</h2>
          <label>
            <input
              className="bg-white"
              placeholder="Enter email adress"
              type="email"
              name="search"
              prettier-ignore
            />
            <input
              className="mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-5 rounded"
              type="submit"
              // prettier-ignore
            />
          </label>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
