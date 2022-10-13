import React from "react";
import { useState, useEffect, useRef } from 'react'
import ProductionList from "../productionList/ProductionList"
import { FadeIn } from "../animations/FadeIn"
import VideoModal from "../modals/VideoModal"
import { fashiondata } from '../../fashion-data'
import { beautydata } from '../../beauty-data'
import { celebritydata } from '../../celebrity-data'
import { luxurydata } from '../../luxury-data'



export default function Productions() {


	const [selected, setSelected] = useState("fashion")

	const dataArray = new Array(7)
	const [data, setData] = useState(dataArray)

	const [open, setOpen] = useState(false)
	const [url, setUrl] = useState()
	const [title, setTitle] = useState()
	const [img, setImage] = useState()

	const [itemsPerPage, setItemsPerPage] = useState(6)
	let slice = data.slice(0, itemsPerPage)
	const viewMoreRef = useRef(null)
	const viewMore = () => {
		setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 6)
	}

	useEffect(() => {
		if (itemsPerPage < data.length)
			viewMoreRef.current.style.display = "block"
		else
			viewMoreRef.current.style.display = "none"
	}, [itemsPerPage, data])

	const list = [
		{
			id: "fashion",
			title: "Fashion"
		},
		{
			id: "beauty",
			title: "Beauty"
		},
		{
			id: "celebrity",
			title: "Celebrity Style"
		},
		{
			id: "luxury",
			title: "Luxury"
		},
	]

	useEffect(() => {
		switch (selected) {
			case "fashion":
				setData(fashiondata);
				break;
			case "beauty":
				setData(beautydata);
				break;
			case "celebrity":
				setData(celebritydata);
				break;
			case "luxury":
				setData(luxurydata);
				break;
			default:
				setData(fashiondata);
		}
	}, [selected])

	return (
		<div className="productions" id="productions">
			<FadeIn>
				<h2>fashion <br /> coverage</h2>
			</FadeIn>

			<ul>
				{list.map(item => (
					<ProductionList
						key={item.id}
						id={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						setItemsPerPage={setItemsPerPage}
					/>
				))}
			</ul>

			<hr />

			<VideoModal open={open} setOpen={setOpen} url={url} title={title} img={img} />

			<div className="production-list-container">
				{slice.map(d => (
					<div
						key={d.id}
						className="item"
						onClick={() => {
							setOpen(true)
							setUrl(d.url)
							setTitle(d.title)
							setImage(d.img)
						}}
					>
						<img src={d.img} />
						<span>{d.title}</span>
					</div>
				))}
			</div>

			<button
				className="view-more-btn"
				onClick={() => viewMore()}
				ref={viewMoreRef}
			>
				view more
			</button>
		</div>
	)
}
