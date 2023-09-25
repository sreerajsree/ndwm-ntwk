import React from "react";
import { useState } from 'react'
import { FadeIn } from "../animations/FadeIn"
import VideoModal from "../modals/VideoModal"



export default function Productions({ data }) {

	const news = data.featured;
	const [open, setOpen] = useState(false)
	const [subtitle, setSubtitle] = useState()
	const [title, setTitle] = useState()
	const [img, setImage] = useState()
	const [year, setyear] = useState()
	const [month, setMonth] = useState()
	const [slug, setSlug] = useState()

	return (
		<div className="productions" id="productions">
			<FadeIn>
				<h2>Latest From <br /> Nine Day&apos;s Wonder Media</h2>
			</FadeIn>
			<hr />
			<VideoModal open={open} setOpen={setOpen} subtitle={subtitle} title={title} img={img} year={year} month={month} slug={slug} />

			<div className="production-list-container">
				{news.map((d, key) => (
					<div
						key={key}
						className="item"
						onClick={() => {
							setOpen(true)
							setSubtitle(d?.subtitle)
							setTitle(d?.title)
							setImage(d?.photo.path)
							setyear(d?.photo.year)
							setMonth(d?.photo.month)
							setSlug(d?.slug)
						}}
					>
						<img src={`https://thefashionenthusiast.s3.amazonaws.com/${d?.photo.path}`} alt={d?.title} />
						<span>{d?.title}</span>
					</div>
				))}
			</div>

			<button
				className="view-more-btn"
				onClick={event =>  window.location.href='https://thefashionenthusiast.uk/'}
			>
				view more
			</button>
		</div>
	)
}
