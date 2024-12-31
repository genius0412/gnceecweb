import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Logo from '../../public/images/logo.png';

const Home = () => {

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<div className="flex flex-col md:flex-row mt-16 w-screen h-[100vh-4rem] p-12 justify-center items-center">
				<div className="leading-none hidden md:block text-[10.4vw] font-black w-auto h-full sm:[writing-mode:vertical-rl] sm:[transform:scale(-1)] text-center">26111</div>
				<Image src={Logo} alt="26111 Logo" className="w-[60vw] md:w-auto md:h-[20vw] md:mb-5" />
				<div className="font-black text-[14vw] md:text-[10vw] flex flex-col leading-none items-center md:items-stretch">
					<div className='flex flex-row'>
						<div className="text-black dark:text-white block md:hidden mr-4">26111</div>
						<div className="text-gnce dark:brightness-150">GNCE</div>
					</div>
					<div className="text-primary-light dark:text-primary-dark">Electrified</div>
					<div className="text-secondary-light dark:text-secondary-dark">Chickens</div>
				</div>
			</div>
		</div>
	)
}

export default Home;