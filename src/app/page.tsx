import Customize from "@/components/Customize";
import Extention from "@/components/Extention";
import Footer from "@/components/Footer";
import Hero_Section from "@/components/Hero_Section";
import Navbar from "@/components/Navbar";
import Sponsers from "@/components/Sponsers";
import Work_management from "@/components/Work_management";
import Your_Work from "@/components/Your_Work";

export default function Home() {
  return (
   <div>

    <Navbar/>
    <Hero_Section/>
    <Work_management/>
    <Extention/>
    <Customize/>
    <Your_Work/>
    <Sponsers/>
    <Footer/>
   </div>
  );
}
