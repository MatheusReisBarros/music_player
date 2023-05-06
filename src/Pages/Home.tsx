import back from "../image/home.jpg";
import backMobile from '../image/homeMobile.jpg'
import fund from '../image/4242172.jpg'

const Home = () => {
  return (
    <main>
      <div className="lg:hidden">
        <img className="" src={fund} />
      </div>
      <div className="hidden lg:flex">
        <img src={back} />
      </div>
    </main>
  );
};

export default Home;
