import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Explore } from "./pages/Explore";
import Attractions from "./pages/attractions";
import Restaurants from "./pages/Restaurants";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/Explore/معالم-سياحية" element={<Attractions />}></Route>
        <Route path="/Explore/مطاعم" element={<Restaurants />}></Route>
        <Route path="/Explore/فنادق" element={<Hotels />}></Route>
      </Routes>
    </>
  );
}

export default App;
