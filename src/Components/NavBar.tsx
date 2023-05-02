import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-around w-full bg-primary-color">
      <div className="flex items-center justify-center w-5/12">
        <img className="w-28 h-28" src={logo} />
      </div>
      <div className="flex items-center justify-around w-7/12">
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
    </nav>
  );
};

export default NavBar;
