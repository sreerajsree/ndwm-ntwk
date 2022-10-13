import Head from "next/head";
import Navigation from "../header/navigation/Navigation";
import Logo from "../header/logo/Logo";
import Footer from "../footer/Footer";
import Fullscreen from "../fullscreen/Fullscreen";
import ContactModal from "../modals/ContactModal";
import Slider from "../slider/Slider";

export default function Layout({ children, articles }) {
  
  return (
    <div className="layout-container">
      <Head>
        <title>Nine Day&apos;s Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Logo />
      <Navigation />
      {children}
      <Slider articles={articles} />
      <Footer />
      <Fullscreen />
      <ContactModal />
    </div>
  );
}
