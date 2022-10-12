import Head from "next/head";
import Logo from "../header/logo/Logo"
import Navigation from "../header/navigation/Navigation"

const Layout = () => {
  return (
    <div>
      <Head>
        <title>Nine Day's Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Logo/>
      <Navigation/>
    </div>
  );
};

export default Layout;
