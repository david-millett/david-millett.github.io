import { Routes, Route } from "react-router-dom";

// * Components
import NavBar from "./components/NavBar/NavBar";
import NavBarMobile from "./components/NavBarMobile/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import Arrow from "./components/Arrow/Arrow";

const App = () => {

  return (
    <>
      <NavBar />
      <NavBarMobile />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Arrow />
    </>
  );
};

export default App;