import BestSellers from "@/components/home/BestSellers";
import LandingPage from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import Testimonials from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <ProductsSection/>
      <Testimonials/>
      <BestSellers/>
    </div>
  );
}
