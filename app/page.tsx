import Aboutsection from "@/components/Aboutsection";
import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import Downloadsection from "@/components/Downloadsection";
import Howitswork from "@/components/Howitswork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="px-5 flex flex-col gap-[150px]">
      <Banner />
      <Achievement />
      <Aboutsection />
      <Services />
      <Testimonials />
      <Howitswork />
      <Downloadsection />

    </div>
  );
}
