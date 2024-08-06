import Navbar from "./Navbar";
import Hero from "./Hero_DCT";
import About from "./About_DCT";
import Services from "./Services";
import Lorems from "./Lorem";
import Footer from "./Footer_DCT";
import Globe2 from "./Globe2";
import Footer2 from "./Footer2";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div>
      <Hero />
      </div>
      <div >
      <About />
      </div>
      <Services />
      <Globe2 />
      <Lorems />  
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
