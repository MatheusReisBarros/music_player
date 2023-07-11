import { Outlet } from "react-router-dom";

import NavBar from "./Components/Layout/NavBar/NavBar";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
