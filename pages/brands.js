import Head from "next/head";
import Layout from "../components/constants/Layout";
import { TbWorld } from "react-icons/tb";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoPinterest,
} from "react-icons/io5";

const Brands = () => {

  return (
    <Layout>
      <Head>
        <title>Brands | Nine Day&apos;s Wonder Media Group</title>
      </Head>
      <section className="article_section">
        <article className="articles">
          <div className="article_text">
            <div className="article_heading">THE FASHION ENTHUSIAST</div>
            <div className="article_subheading">
              Fashion around the world 🌍
            </div>
            <p className="article_details">
              The Fashion Enthusiast brings you the latest news about the
              fashion and beauty industries, designers, celebrities, models, and
              extensive coverage of fashion week and the runway We are a team of
              fashion media specialists working in cooperation with the leading
              fashion, beauty, and retail industries. We create and deliver
              expert-level publications on the subject of the worldwide fashion
              Group.
            </p>
            <div className="about-section">
              <div>
                <a
                  href="https://thefashionenthusiast.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/thefashionenthusiast.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoFacebook className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/thefashionenthusiast.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoInstagram className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/thefashionenthusiast/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin className="icon" />
                </a>
                <a
                  href="https://twitter.com/TFE_Worldwide"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoTwitter className="icon" />
                </a>
                <a
                  href="https://www.pinterest.com/TFE_Official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoPinterest className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="article_img1">
            <img src="/images/brands/logo-white.png" alt="The Fashion Enthusiast Logo" />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Brands;
