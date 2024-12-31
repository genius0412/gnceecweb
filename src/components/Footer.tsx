import { Footer } from 'flowbite-react'
import { BsGithub, BsInstagram } from "react-icons/bs"
import React from 'react'

const WebFooter = () => {
	return (
		<Footer container className="flex flex-col md:flex-row items-center mt-10">
			<Footer.Copyright href="#" by="GNCE Electrified Chickens" year={2024} />
			<Footer.LinkGroup className="mt-1 md:mt-0 flex flex-row items-center">
				<Footer.Link href="/">Home</Footer.Link>
				<Footer.Link href="/about">About</Footer.Link>
				<Footer.Link href="/blog">Blog</Footer.Link>
			</Footer.LinkGroup>
			<div className="mt-2 md:mt-0 flex flex-row items-center space-x-6">
				<Footer.Icon href="https://www.instagram.com/ftc_26111/" icon={BsInstagram} />
				<Footer.Icon href="https://github.com/26111-Electrified-Chickens" icon={BsGithub} />
			</div>
		</Footer>
	)
}

export default WebFooter