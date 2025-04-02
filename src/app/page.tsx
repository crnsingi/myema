import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Technologies from "@/components/home/Technologies";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <Stats />
      <Testimonials />
      <Partners />
      <CTA />
    </MainLayout>
  );
}
