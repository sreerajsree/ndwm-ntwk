import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="footer full-bleed">
      <div className="lets-meet">Nine Day's Wonder Media</div>
      <div className="footer-main">
        <a
          target="_blank"
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
            href="https://www.instagram.com/ninedayswondermedia/"
          >
            <TbBrandInstagram className="icon" />
          </a>
          <a target="_blank" href="">
            <TbBrandYoutube className="icon" />
          </a>
          <a target="_blank" href="">
            <TbBrandLinkedin className="icon" />
          </a>
          <a target="_blank" href="">
            <TbBrandTwitter className="icon" />
          </a>
        </div>
        <hr className="fancy" />
        <p className="copyright">
          Copyright &#169; {new Date().getFullYear()} Nine Day's Wonder Media
          Network. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}