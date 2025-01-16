import { Routes, Route } from "react-router-dom";

// * Components
import NavBar from "./components/NavBar/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";
import Arrow from "./components/Arrow/Arrow";

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Arrow />
    </>
  );
};

export default App;