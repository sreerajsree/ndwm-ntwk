import Head from "next/head";
import Navigation from "../header/navigation/Navigation";
import Logo from "../header/logo/Logo";
import Footer from "../footer/Footer";
import Fullscreen from "../fullscreen/Fullscreen";
import ContactModal from "../modals/ContactModal";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Nine Day's Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Logo />
      <Navigation />
      {children}
      <Footer />
      <Fullscreen />
      <ContactModal />
    </div>
  );
}
