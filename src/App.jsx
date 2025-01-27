import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// * Components
import NavBar from "./components/NavBar/NavBar";
import NavBarMobile from "./NavBar copy/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import Arrow from "./components/Arrow/Arrow";

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
      <NavBar />
      <NavBarMobile closeMenu={closeMenu} menuOpen={menuOpen} handleMenuStateChange={handleMenuStateChange} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Arrow closeMenu={closeMenu} />
    </>
  );
};

export default App;