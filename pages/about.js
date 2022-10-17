import Head from "next/head";
import Layout from "../components/constants/Layout";
import { TbWorld } from "react-icons/tb";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About | Nine Day&apos;s Wonder Media Network</title>
      </Head>
     <div className="margin"></div>
      <section className="about-hero">
        <h1>
          <span>know</span>
        </h1>
        <h1>
          <span>about</span>
        </h1>
        <h1>
          <span>Nine day&apos;s</span>
        </h1>
        <h1>
          <span>wonder</span>
        </h1>
        <h1>
          <span>media</span>
        </h1>
      </section>

      <section className="about-photo full-bleed">
        <div className="about-linear-gradient-div-top"></div>
        <div className="about-linear-gradient-div-bottom"></div>
        <img className="about-image" src="/images/about.jpg" alt="Nine Day's Wonder Media Network" />
      </section>

      <section className="advertise">
         <div className="intro-text">
          <h5>
            We <span className="ndwm">Nine Day&apos;s Wonder Media Network</span> is
            a publisher of fashion trade websites for the fashion, retail and
            beauty industries.
          </h5>
          <p>
            These include{" "}
            <a href="https://thefashionenthusiast.netlify.app/" target="_blank" rel="noreferrer">
              The Fashion Enthusiast
            </a>
            .
          </p>
          <p>
            We are a media company for the future, with a remarkable past. We
            are Nine Day&apos;s Wonder Media Network.
          </p>
          <p className="italics">
            Our Mission: To be the world&apos;s premier publishing and media
            organization through delivering superior and innovative content,
            with a commitment to upholding journalistic excellence and driving
            today&apos;s media evolution, all while offering the finest opportunities
            to the industry&apos;s brightest talent.
          </p>
        </div>
      </section>
      <section className="article_section">
        <h3 className="leadership">LEADERSHIP</h3>
        <article className="articles">
          <div className="article_text">
            <div className="article_heading">
              SREERAJ S
            </div>
            <div className="about">
              founder / Chief Developer
            </div>
            <p className="article_details">
              At Samsung, we believe our choices today determine a sustainable
              tomorrow. For more than 20 years, we{"'"}ve been reimagining our
              products to build environmental sustainability into everything we
              do, through innovative product design and packaging, as well as
              energy-saving technology and recycling. We{"'"}ve diverted 4.5
              million metric tons of e-waste from landfills since 2008, with the
              goal of being the #1 maker of sustainable products by 2025. So,
              join us. We can do more together.
            </p>
            <div className="about-section">
              <div>
                <a href=""><TbWorld className="icon"/></a>
                <a href=""><IoLogoFacebook className="icon"/></a>
                <a href=""><IoLogoInstagram className="icon"/></a>
                <a href=""><IoLogoLinkedin className="icon"/></a>
                <a href=""><IoLogoTwitter className="icon"/></a>
              </div>
            </div>
          </div>
          <div className="article_img1">
            <img src="/images/brands/tfe.svg" alt="The Fashion Enthusiast" />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default About;
