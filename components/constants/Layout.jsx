import Head from "next/head";
import Navigation from "../header/navigation/Navigation";
import Logo from "../header/logo/Logo";
import Footer from "../footer/Footer";
import Fullscreen from "../fullscreen/Fullscreen";
import ContactModal from "../modals/ContactModal";
import Slider from "../slider/Slider";

export default function Layout({ children }) {

  return (
    <div className="layout-container">
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link rel="manifest" href="favicons/manifest.json" />
        <meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Jost:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Logo />
      <Navigation />
      {children}
      <Slider />
      <Footer />
      <Fullscreen />
      <ContactModal />
    </div>
  );
}
