import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { Swing } from "../components/animations/Swing";
import { MouseMoveScroll } from "../components/animations/MouseMoveScroll";
import { data } from "../components/selectedWorks/selected-works-data";
import Thumbnail from "../components/selectedWorks/Thumbnail";
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
  const [thumbnails, setThumbnails] = useState([]);
  const thumbnailList = [];
  const minWidth = 30;
  const maxWidth = 60;
  const holder = useRef(null);

  const createThumbnail = () => {
    const randWidth =
      Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const randHeight = Math.floor(randWidth * 0.5625);
    const pixelWidth = (document.documentElement.clientWidth * randWidth) / 100;
    const pixelHeight =
      (document.documentElement.clientWidth * randHeight) / 100;

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    const randX = getRandom(
      pixelWidth * 0.5,
      holder.current.offsetWidth - pixelWidth * 1.5
    );
    const randY = getRandom(
      pixelHeight,
      holder.current.offsetHeight - pixelHeight * 2
    );

    let minDistanceX;
    let minDistanceY;

    let overlap = false;
    for (let i = 0; i < thumbnailList.length; i++) {
      const other = thumbnailList[i];

      if (other.pixelWidth > pixelWidth) {
        minDistanceX = other.pixelWidth / 1.25;
        minDistanceY = other.pixelHeight / 1.25;
      } else {
        minDistanceX = pixelWidth / 1.25;
        minDistanceY = pixelHeight / 1.25;
      }

      let distanceX = Math.abs(other.randX - randX);
      let distanceY = Math.abs(other.randY - randY);

      if (distanceX <= minDistanceX && distanceY <= minDistanceY) {
        overlap = true;
        break;
      }
    }

    if (!overlap) {
      thumbnailList.push({
        randWidth,
        randHeight,
        pixelWidth,
        pixelHeight,
        randX,
        randY,
      });
    }
  };

  useEffect(() => {
    let protection = 0;

    while (thumbnailList.length < data.length) {
      createThumbnail();

      protection++;
      if (protection > 1000000) break;
    }
    setThumbnails(thumbnailList);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Brands | Nine Day&apos;s Wonder Media Network</title>
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
              network.
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
            <img src="/images/brands/tfe.svg" alt="The Fashion Enthusiast" />
          </div>
        </article>
      </section>
      <MouseMoveScroll ref={holder}>
        {thumbnails.length ? (
          <Swing>
            {thumbnails.map((thumbnail, i) => (
              <Thumbnail
                key={i}
                randWidth={thumbnail.randWidth}
                randHeight={thumbnail.randHeight}
                randX={thumbnail.randX}
                randY={thumbnail.randY}
                title={data[i].title}
                img={data[i].img}
                url={data[i].url}
              ></Thumbnail>
            ))}
          </Swing>
        ) : null}
      </MouseMoveScroll>
    </Layout>
  );
};

export default Brands;
