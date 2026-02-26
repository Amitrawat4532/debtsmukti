import Aboutsection from "@/components/Aboutsection";
import Achievement from "@/components/Achievement";
import Banner from "@/components/Banner";
import BlogsSection from "@/components/BlogsSection";
import Downloadsection from "@/components/Downloadsection";
import FAQs from "@/components/FAQs";
import Howitswork from "@/components/Howitswork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { seoData } from "@/data";

export const metadata = seoData.home;

export default function Home() {
  return (
    <div className="px-5 flex flex-col gap-37.5">
      <Banner />
      <Achievement />
      <Aboutsection />
      <Services />
      <Testimonials />
      <Howitswork />
      <FAQs />
      <Downloadsection title="Download Your Credit Report from Experian" description="The first step to financial planning starts right here. Always check your credit score!" buttonText="Download Report" buttonLink="/download" ismaxWidth={true} />
    <BlogsSection isHidden={false} />
    </div>
  );
}
