import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <footer className="footer full-bleed">
        <div className="background">
          <div className="foot-mid">
            <img
              src="/logo/ndwm-light.png"
              alt="Nine Day's Wonder Media Group Logo"
            />
          </div>
          <div className="footer-main">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ninedayswondermedia@gmail.com?subject=Hi! I'm contacting because..."
              className="mail"
            >
              ninedayswondermedia@gmail.com
            </a>
            <hr />
            <div className="social">
              <a target="_blank" href="">
                <TbBrandFacebook className="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ninedayswondermedia/"
              >
                <TbBrandInstagram className="icon" />
              </a>
              <a target="_blank" href="">
                <TbBrandYoutube className="icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ninedayswondermedia/"
                rel="noreferrer"
              >
                <TbBrandLinkedin className="icon" />
              </a>
              <a target="_blank" href="">
                <TbBrandTwitter className="icon" />
              </a>
            </div>
            <hr className="fancy" />
            <p className="copyright">
              Copyright &#169; {new Date().getFullYear()} Nine Day&apos;s Wonder
              Media Group. All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
