import HomePage from "./HomePage";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default Home;
