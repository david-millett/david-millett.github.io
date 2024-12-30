import { Routes, Route } from "react-router-dom";

// * Components
import NavBar from "./components/NavBar/NavBar";

// * Pages
import Landing from "./pages/Landing/Landing";


const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;