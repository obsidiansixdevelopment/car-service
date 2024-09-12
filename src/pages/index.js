import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import OurService from "./components/our-service";
import WhyChoose from "./components/why-choose";
import PricePlan from "./components/price-plan";
import OurBlogs from "./components/our-blogs";
import BookAppoint from "./components/book-appoint";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Layout from "./components/layout";
import HeadSubhead from "./components/head-subhead";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Layout>
    <div
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <HeroSection />
      <OurService />
      <WhyChoose />
      <PricePlan />
      <OurBlogs />
      <div className="my-10">
        <HeadSubhead name={'Book an'} subname={"appointment"} /> 
        
        <BookAppoint />

      </div>
      <Faq />
    </div>

    </Layout>
  );
}
