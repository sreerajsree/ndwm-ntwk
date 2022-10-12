import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#070F17"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 512 508.33"
    >
      <path
        fill="#180235"
        d="M317.99 323.62c-17.23-19.89-35.3-40.09-54.23-60.09-62.06 59.35-119.53 126.18-161.12 201.73-51.02 92.68-126.31 16.84-92.15-50.33 27.46-61.28 98.07-146.3 182.94-220.07-46.74-41.72-97.97-79.34-154.08-107.07C-42.76 47.2 19.97-20.82 79.37 6.16c50.04 19.82 119.09 70.85 182.26 134.32 63.11-45.86 129.55-81.8 189.45-95.87 13-3.06 50.95-11.33 59.69 1.04 3.29 4.67-.33 11.68-7.08 19.29-22.99 25.96-84.78 67.12-114.72 90.82-21.61 17.11-43.55 34.99-65.37 53.71 23.2 28.81 43.94 58.64 60.47 88.17 14.37 25.66 25.55 51.1 32.42 75.46 3.14 11.13 11.75 43.64 1.38 51.66-3.91 3.03-10.11.16-16.95-5.38-23.34-18.89-61.29-70.77-82.93-95.76z"
      />
    </svg>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
        closeIconId="contact-close-button"
        modalId="contact-modal"
        styles={{
          overlay: {
            background: "none",
          },
        }}
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={1000}
      >
        <div className="background">
          <div className="contact-modal-content overflow">
            <div className="contact-heading-section">
              <h4 className="contact-heading-title">Let’s Connect</h4>
              <p className="contact-heading-subtext">
                Whether you’re looking to elevate your brand, subscribe to our
                websites, or simply learn more about us, we’d love to hear from
                you.
              </p>
            </div>

            <div className="contact-form-section">
              <form
                name="contact"
                className="contact-form"
                method="post"
                action=""
              >
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <textarea
                  className="input text-area"
                  name="message"
                  placeholder="Ideas/Comments/Questions"
                ></textarea>
                <button className="form-submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info">
                <p className="contact-info-label">Phone:</p>
                <p className="contact-info-detail">
                  <a target="_blank" href="#">
                    +91 xxxx xxxx xx
                  </a>
                </p>
              </div>
              <div className="contact-info">
                <p className="contact-info-label">Email:</p>
                <p className="contact-info-detail">
                  <a
                    className="mailer"
                    target="_blank"
                    href="mailto:ninedayswondermedia@gmail.com?subject=Hi ! I'm contacting because..."
                  >
                    ninedayswondermedia@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-info">
                <p className="contact-info-label">Address:</p>
                <p className="contact-info-detail">
                  <a target="_blank" href="#">
                    Bangalore, India
                  </a>
                </p>
              </div>
              <div className="contact-info">
                <p className="contact-info-label">Follow Us:</p>
                <p className="contact-info-detail social-icons">
                  <a target="_blank" href="">
                    <TbBrandFacebook className="contact-social-icons" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ninedayswondermedia/"
                  >
                    <TbBrandInstagram className="contact-social-icons" />
                  </a>
                  <a target="_blank" href="">
                    <TbBrandYoutube className="contact-social-icons" />
                  </a>
                  <a target="_blank" href="">
                    <TbBrandLinkedin className="contact-social-icons" />
                  </a>
                  <a target="_blank" href="">
                    <TbBrandTwitter className="contact-social-icons" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="contact-btn" onClick={() => setOpen(true)}>
        Contact
      </div>
    </>
  );
}
