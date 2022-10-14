import { useEffect, useState, useRef } from "react";
import { Swing } from "../components/animations/Swing";
import { MouseMoveScroll } from "../components/animations/MouseMoveScroll";
import { data } from "../components/selectedWorks/selected-works-data";
import Thumbnail from "../components/selectedWorks/Thumbnail";
import Layout from "../components/constants/Layout";
import { TbWorld } from "react-icons/tb";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

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
      <section className="article_section">
        <article className="articles">
          <div className="article_text">
            <div className="article_heading">
              EVERYDAY CHANGES. MEANINGFUL IMPACT.
            </div>
            <div className="article_subheading">
              creating meaningful impact at every step.
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
