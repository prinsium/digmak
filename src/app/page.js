import About from "@/components/About";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mb-8">
    <Homepage />
    <About />
    <Testimonials />
    <Footer />
    </div>
  );
}
