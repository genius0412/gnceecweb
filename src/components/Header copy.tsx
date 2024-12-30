"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ProfilePicture from '../../public/images/profile.png';
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useLocalStorage } from 'usehooks-ts'
import Link from 'next/link';
import { useActivePath } from './useActivePath';
import { Navbar } from 'flowbite-react';

interface NavigationItem {
	href: string,
	name: string,
};

const navItems: NavigationItem[] = [
	{ href: "/", name: "Home" },
	{ href: "/about", name: "About" },
	{ href: "/posts", name: "Blog" },
];

const Header = () => {
	const [darkMode, setDarkMode] = useLocalStorage<boolean | null>("dhkblog:theme", null, { initializeWithValue: false });
	const navOpacity = useRef<HTMLDivElement>(null);
	const toggleButton = useRef<HTMLDivElement>(null);
	const checkActivePath = useActivePath();

	useEffect(() => {
		if (darkMode == null) setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
	}, []);

	const toggleSwitch = () => {
		setDarkMode(!darkMode);
	}

	const changeHeaderOpacity = () => {
		if (!navOpacity.current) return;
		navOpacity.current.style.setProperty("--tw-bg-opacity", (1 - Math.min(window.scrollY, 200)/300).toString());
		if(window.scrollY == 0) navOpacity.current.classList.remove('ring-2');
		else navOpacity.current.classList.add('ring-2');
	} 

	useEffect(() => {
		window.addEventListener('scroll', changeHeaderOpacity);
		return () => window.removeEventListener('scroll', changeHeaderOpacity);
	}, []);

	useEffect(() => {
		if (darkMode) {
			// DarkMode
			document.documentElement.classList.add('dark');

			toggleButton.current?.classList.remove('justify-start');
			toggleButton.current?.classList.add('justify-end');

			toggleButton.current?.classList.add('bg-gray-500');
			toggleButton.current?.classList.remove('bg-slate-400');
		} else {
			// LightMode
			document.documentElement.classList.remove('dark');
			toggleButton.current?.classList.add('justify-start');
			toggleButton.current?.classList.remove('justify-end');

			toggleButton.current?.classList.add('bg-slate-400');
			toggleButton.current?.classList.remove('bg-gray-500');
		}
	}, [darkMode])


	return (
		<header className='fixed top-2 z-50 w-screen h-auto flex flex-row justify-center items-center'>
			<div ref={navOpacity}  className='ring-amber-200 dark:ring-slate-900 duration-500 backdrop-blur-md rounded-xl relative flex flex-row justify-center items-center w-[90%] mr-4 h-auto py-5 px-16 bg-amber-100 dark:bg-slate-600'>
				<Link href={"/"} className="hidden left-5 absolute md:flex flex-row items-center">
					<Image src={ProfilePicture} alt="Profile Picture" className="mr-5 w-12 h-12 border-white border-2 rounded-full" />
					<div className="text-xl lg:text-3xl lg:font-extrabold text-secondary-light dark:text-secondary-dark">26111 GNCE Electrified Chickens</div>
				</Link>

				<nav className="flex flex-row items-center space-x-3">
					{navItems.map((item: NavigationItem) => (
						<Link key={item.href} href={item.href} className={"text-xl " + (checkActivePath(item.href) ? "font-bold text-black dark:text-white" : "text-gray-700 dark:text-gray-400")}>{item.name}</Link>
					))}
				</nav>

				<div ref={toggleButton} className="absolute right-3 sm:right-5 p-1 sm:w-16 sm:h-auto flex justify-start items-center cursor-pointer rounded-full" data-ison={darkMode} onClick={toggleSwitch}>
					<motion.div className="flex justify-center items-center bg-white w-8 h-8 rounded-full handle" layout transition={{ type: "spring", stiffness: 700, damping: 30 }}>
						{darkMode ? <FaMoon fill={"black"} size={20} /> : <CiSun fill={"black"} size={35} />}
					</motion.div>
				</div>
			</div>
		</header>
	)
}

export default Header