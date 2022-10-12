import Head from "next/head";
import Navigation from "../header/navigation/Navigation";
import Logo from "../header/logo/Logo";
import Fullscreen from "../fullscreen/Fullscreen";
import ContactModal from "../modal/ContactModal";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Brands | Nine Day's Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Logo />
      <Navigation />
      {children}
      <Fullscreen />
      <ContactModal />
    </div>
  );
}
