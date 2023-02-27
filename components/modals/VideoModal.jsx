import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";

export default function VideoModal({
  open,
  setOpen,
  title,
  img,
  subtitle,
  year,
  month,
  slug,
}) {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIconId="close-button"
        modalId="modal"
        styles={{
          overlay: {
            background: "rgba(0, 0, 0, 0.98)",
          },
        }}
      >
        <Link
          href={`https://thefashionenthusiast.uk/stories/${slug}`}
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer" className="">
            <h3 className="video-title">{title}</h3>
            {/* <VideoPlayer url={url} /> */}
            <img
              src={`https://thefashionenthusiast.uk/storage/photos/${year}/${month}/${img}`}
              alt={title}
            />
            <p>{subtitle}</p>
          </a>
        </Link>
      </Modal>
    </>
  );
}
