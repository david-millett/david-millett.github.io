// import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// * Components
import NavBarBar from "./components/NavBarBar/NavBarBar";
// import NavBar from "./components/NavBar/NavBar";
import NavBarMobile from "./components/NavBarMobile/NavBar";
import Arrow from "./components/Arrow/Arrow";

// * Pages
import Landing from "./pages/Landing/Landing";

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)
    
  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <NavBarBar />
      {/* <NavBar /> */}
      <NavBarMobile closeMenu={closeMenu} menuOpen={menuOpen} handleMenuStateChange={handleMenuStateChange} />
      {/* <Routes> */}
        {/* <Route path="/" element={<Landing />} /> */}
      {/* </Routes> */}
      <Landing />
      <Arrow closeMenu={closeMenu} />
    </>
  );
};

export default App;