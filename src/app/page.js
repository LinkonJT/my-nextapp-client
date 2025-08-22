import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProductHighlight from "./components/ProductHighlight";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <ProductHighlight></ProductHighlight>
   </div>
  );
}

