import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Products from "@/components/Products";
import PhotoGallery from "@/components/PhotoGallery";
import References from "@/components/References";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Summary />
      <Products />
      <PhotoGallery />
      <References />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
