import Head from "next/head"
import Layout from "../components/constants/Layout"

const Advertise = () => {
  return (
    <Layout>
    <Head>
        <title>Advertise | Nine Day&apos;s Wonder Media Network</title>
    </Head>
    <div className="margin"></div>
    <section className="about-hero">
        <h1><span>advertise</span></h1>
        <h1><span>with</span></h1>
        <h1><span>us</span></h1>
    </section>

    <section className="about-photo full-bleed">
        <div className="about-linear-gradient-div-top"></div>
        <div className="about-linear-gradient-div-bottom"></div>
        <img className="advertise-image" src="/images/advertise.jpeg" alt="Nine Day's Wonder Media Network" />
    </section>

    <section className="advertise">
         <div className="intro-text">
            <h5>ADVERTISING TYPE</h5>
            <p>Direct, Programmatic Guaranteed, PMP, Open Exchange</p>
            <h5>AUDIENCE TARGETING</h5>
            <p>Proprietary contextual and 1st party audience signals</p>
            <h5>BRANDED CONTENT</h5>
            <p>Built in collaboration with advertising partners to resonate with our audiences</p>
            <h5>SOCIAL</h5>
            <p>Organic social first programming and promotion, as well as targeted, paid amplification</p>
         </div>
    </section>
</Layout>
  )
}

export default Advertise