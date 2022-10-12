import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
// import Productions from "../components/productions/Productions"
import {
	TextReveal,
	TextRevealPinned,
} from "../components/animations/TextReveal"
import { Parallax, ParallaxOverflow } from "../components/animations/Parallax"
import { FadeIn, FadeInStagger } from "../components/animations/FadeIn"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ReelModal from "../components/modals/ReelModal"
import Script from 'next/script'
import TextTransition, { presets } from "react-text-transition";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
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

  // useEffect(() => {
  //   gsap.to(plus.current, {
  //     scale: 100,
  //     //force3D: false,
  //     scrollTrigger: {
  //       trigger: overlay.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });
  // }, []);
  return (
    <Layout>
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
        <title>Nine Day's Wonder Media Network</title>
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

      <section className="self-intro">
				<TextReveal>
					<p>
						Latest in <span className="text-animation">Fashion</span> around the <span className="text-animation">World</span> <br />
					</p>
					<p>
						We <span className="ndwm">Nine Day's Wonder Media Network</span> is a publisher of fashion trade websites for the fashion, retail and beauty industries.
					</p>
					<p>
						Nine Day's Wonder Media Netwok brands include <br /><a className="link" target="_blank" href="https://thefashionenthusiast.netlify.app/">The Fashion Enthusiast</a>
					</p>
				</TextReveal>
			</section>
    </Layout>
  );
}
