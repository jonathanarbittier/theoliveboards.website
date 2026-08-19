import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Offerings from "@/components/Offerings";
import SignaturePhoto from "@/components/SignaturePhoto";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import About from "@/components/About";
import Social from "@/components/Social";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Offerings />
        <SignaturePhoto />
        <Gallery />
        <Events />
        <About />
        <Social />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
