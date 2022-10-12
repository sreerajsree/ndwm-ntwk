import Head from "next/head";
import Logo from "../header/logo/Logo"
import Navigation from "../header/navigation/Navigation"
import Footer from "../footer/Footer";
import Fullscreen from "../fullscreen/Fullscreen"
import ContactModal from "../modals/ContactModal";

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Nine Day's Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Logo/>
      <Navigation/>
      {children}
      <Footer />
      <Fullscreen />
      <ContactModal/>
    </div>
  );
};

export default Layout;
