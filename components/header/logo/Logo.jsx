import Link from 'next/link'

export default function Logo() {
	return (
		<Link href="/">
			<div className="logo-wrapper">
				<img className="logo-img" src="/logo/ndwm-light.png" alt="Nine Day's Wonder Media Group Logo" />
			</div>
		</Link>
	)
}
