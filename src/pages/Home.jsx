import Hero from "../components/Hero";
import Variants from "../components/Variants";
import MobileLogin from "../components/MobileLogin";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <main className="relative overflow-visible">
      {isMobile ? <MobileLogin /> : (<><Hero /><Variants /></>)}
    </main>
  );
};

export default Home;
