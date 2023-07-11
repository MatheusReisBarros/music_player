import back from "../../image/home.jpg";
import backMobile from '../../image/homeMobile.jpg'
/* import fund from '../../image/4242172.jpg' */

const Home = () => {
  return (
    <main>
      <div className="md:hidden">
        <img className="" src={backMobile} />
      </div>
      <div className="hidden md:flex">
        <img src={back} />
      </div>
    </main>
  );
};

export default Home;
