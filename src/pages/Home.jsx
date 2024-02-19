import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Recommendation from "../components/Recommendation/Recommendation";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Recommendation />
    </div>
  );
};

export default Home;
