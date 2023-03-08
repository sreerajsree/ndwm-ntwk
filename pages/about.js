import Head from "next/head";
import Layout from "../components/constants/Layout";
import { TbWorld } from "react-icons/tb";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

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
        <img
          className="about-image"
          src="/images/about.jpg"
          alt="Nine Day's Wonder Media Network"
        />
      </section>

      <section className="advertise">
        <div className="intro-text">
          <h5>
            We{" "}
            <span className="ndwm">Nine Day&apos;s Wonder Media Network</span>{" "}
            is a publisher of fashion trade websites for the fashion, retail and
            beauty industries.
          </h5>
          <p>
            These include{" "}
            <a
              href="https://thefashionenthusiast.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              The Fashion Enthusiast
            </a>{" "}
            &{" "}
            <a
              href="https://thefashionenthusiast.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              BORN-F
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
            today&apos;s media evolution, all while offering the finest
            opportunities to the industry&apos;s brightest talent.
          </p>
        </div>
      </section>
      <section className="article_section">
        <article className="articles">
          <div className="article_text">
            <h4 className="leadership">LEADERSHIP</h4>
            <div className="article_heading">SREERAJ S</div>
            <div className="about">Founder & CTO</div>
            <p className="article_details">
              Sreeraj S is the Founder and Chief Technology Officer of The
              Fashion Enthusiast and Nine Day&apos;s Wonder Media Network, a
              modern media firm and the authoritative voice of the $2.5 trillion
              worldwide fashion and luxury industries. The Fashion Enthusiast,
              which has its headquarters in the UK, with a global presence
              receives more than 10k unique visits per month and has more than
              5k social media followers. <div className="space"></div>
              Sreeraj started his career as a document specialist and began
              working for RR Donnely. Although he had any formal education or
              expertise in the field of fashion, he had always been enamoured
              with the unique fusion of creativity and commerce that defines the
              sector. The Fashion Enthusiast pioneered a brand-new fashion
              conversation by delving into the fundamental forces driving a
              global retail and manufacturing sector that is experiencing
              unparalleled transformation and explosive expansion. The fashion
              industry was set to be completely transformed by social media and
              cutting-edge technology, and the significance of emerging markets
              in China, India, and Brazil was rising. There was a lot to
              examine, analyse, and research as the fashion industry began to
              take on more importance in both global commerce and popular
              culture.<div className="space"></div>
              Sreeraj holds a bachelor&apos;s degree in Computer Science from
              University of Kerala. He was born in Kollam, Kerala, India.
              Currently, Sreeraj is working as a full-stack developer.
            </p>
            <div className="about-section">
              <div>
                <a
                  href="https://sreerajsree.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/Sreeraj.S.Nair007"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoFacebook className="icon" />
                </a>
                <a
                  href="https://instagram.com/julius_caesur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoInstagram className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sreerajsree"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin className="icon" />
                </a>
                <a
                  href="https://twitter.com/sreerajsree_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoTwitter className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="article_img1">
            <img
              src="https://thefashionenthusiast.uk/frontend/img/ceo/sreeraj.jpg"
              alt="Sreeraj S - Founder & CTO - Nine Day's Wonder Media Network"
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default About;
