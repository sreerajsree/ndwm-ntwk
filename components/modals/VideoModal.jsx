import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

export default function VideoModal({ open, setOpen, url, title, img }) {
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
          }
        }}
			>
				<h3 className="video-title">{title}</h3>
				{/* <VideoPlayer url={url} /> */}
				<img src={img} alt="" />
			</Modal>
		</>
	)
}
