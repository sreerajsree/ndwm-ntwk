import Link from 'next/link'

export default function Logo() {
	return (
		<Link href="/">
			<div className="logo-wrapper">
				<img className="logo-img" src="/images/logowhite.png" alt="Nine Day's Wonder Media Logo" />
			</div>
		</Link>
	)
}
