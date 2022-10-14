import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/constants/Layout";
import Productions from "../components/productions/Productions";
import {
  TextReveal,
  TextRevealPinned,
} from "../components/animations/TextReveal";
import { Parallax, ParallaxOverflow } from "../components/animations/Parallax";
import { FadeIn, FadeInStagger } from "../components/animations/FadeIn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ReelModal from "../components/modals/ReelModal";
import Script from "next/script";
import TextTransition, { presets } from "react-text-transition";

gsap.registerPlugin(ScrollTrigger);

const Home = ({fashionData, beautyData, celebData, luxuryData}) => {
  useEffect(() => {
    let video = document.querySelector("video");
    window.addEventListener("scroll", function () {
      video.style.opacity = `${0.8 + window.scrollY / -1000}`;
    });
  }, []);

  const [open, setOpen] = useState(false);
  const TEXTS = [
    "fashion",
    "beauty",
    "models",
    "runway",
    "celebrities",
    "cosmetics",
    "perfumes",
    "trends",
  ];
  const plus = useRef();
  const overlay = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    gsap.to(plus.current, {
      scale: 100,
      //force3D: false,
      scrollTrigger: {
        trigger: overlay.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);
  return (
    <Layout >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0TY8EGGHXN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-0TY8EGGHXN');
				`}
      </Script>
      <Head>
        <title>Nine Day&apos;s Wonder Media Network</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <section className="landing full-bleed">
        <video
          className="video-full-screen"
          poster="/images/runway.webp"
          src="https://res.cloudinary.com/tfe-official/video/upload/v1658775167/Barbara_Palvin___Giorgio_Armani__Acqua_di_Gioia_advertisement_AdobeExpress_ophnky.mp4"
          muted
          playsInline
          autoPlay
          loop
        />
        <div className="index-linear-gradient-div-top"></div>
        <div className="index-linear-gradient-div-bottom"></div>
        <div className="landing-content">
          <div className="landing-content-title-container">
            <h1 className="landing-content-title">
              <section className="inline">
                Latest in&nbsp;
                <TextTransition
                  springConfig={presets.gentle}
                  className="title-word text-italic"
                >
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </section>
            </h1>
          </div>
          <ReelModal open={open} setOpen={setOpen} />
          {/* <button className="watch-showreel-btn" onClick={() => setOpen(true)}>
						watch showreel
					</button> */}
          <div className="arrow"></div>
        </div>
      </section>

      <section className="intro">
        <TextReveal>
          <p>
            Latest in <span className="text-animation">Fashion</span> around the{" "}
            <span className="text-animation">World</span> <br />
          </p>
          <div className="flow">
            <img src="/graphics/flow.png" alt="flow" width="500px" />
          </div>
          <p>
            We <span className="ndwm">Nine Day&apos;s Wonder Media Network</span> is
            a publisher of fashion trade websites for the fashion, retail and
            beauty industries.
          </p>
          <p>
            Nine Day&apos;s Wonder Media Netwok brands include <br />
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://thefashionenthusiast.netlify.app/"
            >
              The Fashion Enthusiast
            </a>
          </p>
        </TextReveal>
      </section>

      <section className="images">
        <TextRevealPinned>
          <h3>what we are</h3>
          <h3>latest in</h3>
          <h3>fashion</h3>
          <h3>beauty</h3>
          <h3>celebrity style</h3>
          <h3>luxury</h3>
          <h3>and more</h3>
        </TextRevealPinned>
        <Parallax>
          <div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/new-1.jpeg"
                objectFit="contain"
                width="1366"
                height="570"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/beauty-2.jpg"
                objectFit="contain"
                width="640"
                height="360"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/kardashiyan-1.jpg"
                objectFit="contain"
                width="519"
                height="369"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-4" className="image-wrapper" data-speed="0.9">
            <ParallaxOverflow>
              <Image
                src="/images/skills/bulgari.jpg"
                objectFit="contain"
                width="750"
                height="336"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7">
            <ParallaxOverflow>
              <Image
                src="/images/skills/barbara-2.jpg"
                objectFit="contain"
                width="1080"
                height="1350"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6">
            <ParallaxOverflow>
              <Image
                src="/images/skills/beauty-3.jpg"
                objectFit="contain"
                width="640"
                height="800"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5">
            <ParallaxOverflow>
              <Image
                src="/images/skills/dandg.jpg"
                objectFit="contain"
                width="750"
                height="938"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-4" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/missdior.jpg"
                objectFit="contain"
                width="640"
                height="729"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8">
            <ParallaxOverflow>
              <Image
                src="/images/skills/barbara-3.jpg"
                objectFit="contain"
                width="480"
                height="853"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image
                src="/images/skills/emma-1.jpg"
                objectFit="contain"
                width="640"
                height="1138"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1">
            <ParallaxOverflow>
              <Image
                src="/images/skills/kendall-1.webp"
                objectFit="contain"
                width="320"
                height="569"
                loading="eager"
                alt="Nine Day's Wonder Media Network"
              />
            </ParallaxOverflow>
          </div>
        </Parallax>
      </section>

      <section className="brands">
        <FadeIn>
          <p>Our Brands</p>
        </FadeIn>
        <FadeInStagger>
          <img
            className="brand-logo"
            src="/images/brands/tfe.svg"
            alt="The Fashion Enthusiast"
          />
        </FadeInStagger>
      </section>

      <section className="featured-productions full-bleed">
        <div className="overlay" ref={overlay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4519 3213"
            preserveAspectRatio="xMidYMid slice"
            className="plus"
            ref={plus}
          >
            <path
              fill="black"
              d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <Productions fashionData={fashionData} beautyData={beautyData} celebData={celebData} luxuryData={luxuryData} />
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (pageContext) => {
  const fashionRes = await fetch(
    `https://newsapi.org/v2/everything?q=fashion&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const beautyRes = await fetch(
    `https://newsapi.org/v2/everything?q=beauty&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const celebRes = await fetch(
    `https://newsapi.org/v2/everything?q=celebrity-style&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const luxuryRes = await fetch(
    `https://newsapi.org/v2/everything?q=luxury-fashion&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );


  const apiFashion = await fashionRes.json();
  const apiBeauty = await beautyRes.json();
  const apiCeleb = await celebRes.json();
  const apiLuxury = await luxuryRes.json();
  const fashionData  = apiFashion;
  const beautyData = apiBeauty;
  const celebData = apiCeleb;
  const luxuryData = apiLuxury;

  return {
    props: {
      fashionData: fashionData,
      beautyData: beautyData,
      celebData: celebData,
      luxuryData: luxuryData
    }
  }
};

export default Home;
