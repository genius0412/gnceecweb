"use client";

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfilePicture from '../../public/images/logo.png';
import { CiSun } from "react-icons/ci";
import { FaMoon, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useLocalStorage } from 'usehooks-ts'
import Link from 'next/link';
import { useActivePath } from './useActivePath';
import { Navbar } from 'flowbite-react';

const Header = () => {
	const [darkMode, setDarkMode] = useLocalStorage<boolean|null>("gnceec:theme", null, { initializeWithValue: true });
	const [isClient, setIsClient] = useState(false);
	const navOpacity = useRef<HTMLDivElement>(null);
	const toggleButton = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const checkActivePath = useActivePath();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [ftcDropdownOpen, setFtcDropdownOpen] = useState(false);
	const [fllDropdownOpen, setFllDropdownOpen] = useState(false);

	useEffect(() => {
		setIsClient(true);
		if (darkMode === null) setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
	}, []);

	const toggleSwitch = () => {
		setDarkMode(!darkMode);
	}

	const changeHeaderOpacity = () => {
		if (!navOpacity.current) return;
		navOpacity.current.style.setProperty("--tw-bg-opacity", (Math.min(window.scrollY, 150) / 300).toString());
		if (window.scrollY == 0) navOpacity.current.classList.remove('ring-2');
		else navOpacity.current.classList.add('ring-2');
	}

	useEffect(() => {
		changeHeaderOpacity();
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

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
		if (dropdownOpen) {
			setFtcDropdownOpen(false);
			setFllDropdownOpen(false);
		}
	}

	const toggleFtcDropdown = () => {
		setFtcDropdownOpen(!ftcDropdownOpen);
		if (!ftcDropdownOpen) {
			setFllDropdownOpen(false);
		}
	}

	const toggleFllDropdown = () => {
		setFllDropdownOpen(!fllDropdownOpen);
		if (!fllDropdownOpen) {
			setFtcDropdownOpen(false);
		}
	}

	// Add useEffect to handle clicks outside the dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdownOpen(false);
				setFtcDropdownOpen(false);
				setFllDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed top-2 w-full z-40 flex flex-row justify-center items-center">
			<div ref={navOpacity} className="w-[90%] ring-amber-200 dark:ring-slate-700 bg-amber-100 dark:bg-slate-600 backdrop-blur-md transition-all duration-300 rounded-lg flex flex-row justify-between items-center">
				<Navbar className="w-full h-auto bg-inherit dark:bg-inherit rounded-lg">
					<Navbar.Brand as={Link} href={"/"}>
						<Image src={ProfilePicture} alt="Profile Picture" className="mr-1 w-14 h-14 rounded-full hidden md:block -translate-y-0.5" />
						<div className="text-xl lg:text-2xl lg:font-extrabold text-secondary-light dark:text-secondary-dark">
							<div className="hidden lg:block">26111 GNCE Electrified Chickens</div>
							<div className="block lg:hidden">26111 GNCE E.C.</div>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='text-md md:text-lg [&>*]:items-stretch [&>*]:md:items-center'>
						<Navbar.Link active={checkActivePath("/")} className='text-md md:text-lg' as={Link} href={"/"}>Home</Navbar.Link>
						<Navbar.Link active={checkActivePath("/about")} className='text-md md:text-lg' as={Link} href={"/about"}>About</Navbar.Link>
						<div className="relative" ref={dropdownRef}>
							<button
								className={"w-full flex flex-row items-center text-md md:text-lg  hover:text-cyan-700 dark:hover:text-white hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent px-3 md:px-0 py-2 md:py-0 border-b border-gray-100 dark:border-gray-700 md:border-none focus:outline-none " + (checkActivePath("/seasons") ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-400")}
								onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDropdown(); }}
							>
								Seasons <FaChevronDown className="ml-1 mt-0.5" size={15} />
							</button>
							<AnimatePresence>
								{dropdownOpen && (
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.95 }}
										transition={{ duration: 0.2 }}
										className="absolute mt-2 w-40 bg-white dark:bg-gray-600 rounded-md shadow-lg z-50"
									>
										{/* FTC Dropdown */}
										<div className="relative">
											<button
												className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-t-md"
												onClick={(e) => { e.stopPropagation(); toggleFtcDropdown(); }}
											>
												FTC <FaChevronRight className="ml-auto" />
											</button>
											<AnimatePresence>
												{ftcDropdownOpen && (
													<motion.div
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														exit={{ opacity: 0, x: -10 }}
														transition={{ duration: 0.2 }}
														className="absolute left-full top-0 mt-0 w-40 bg-white dark:bg-gray-600 rounded-md shadow-lg"
													>
														<Link href="/seasons/ftc/2425" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
															24-25<br />Into The Deep
														</Link>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
										{/* FLL Dropdown */}
										<div className="relative">
											<button
												className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-b-md"
												onClick={(e) => { e.stopPropagation(); toggleFllDropdown(); }}
											>
												FLL <FaChevronRight className="ml-auto" />
											</button>
											<AnimatePresence>
												{fllDropdownOpen && (
													<motion.div
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														exit={{ opacity: 0, x: -10 }}
														transition={{ duration: 0.2 }}
														className="absolute left-full top-0 mt-0 w-40 bg-white dark:bg-gray-600 rounded-md shadow-lg"
													>
														<Link href="/seasons/fll/2324" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md">
															23-24<br />MASTERPIECE
														</Link>
														<Link href="/seasons/fll/2223" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md">
															22-23<br />SUPERPOWERED
														</Link>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<Navbar.Link active={checkActivePath("/posts")} className='text-md md:text-lg' as={Link} href={"/posts"}>Blog</Navbar.Link>

					</Navbar.Collapse>
					<div ref={toggleButton} className="hidden md:flex p-1 sm:w-12 sm:h-auto justify-start items-center cursor-pointer rounded-full" data-ison={darkMode} onClick={toggleSwitch}>
						<motion.div className="flex justify-center items-center bg-white w-6 h-6 rounded-full handle" layout transition={{ type: "spring", stiffness: 700, damping: 30 }}>
							{isClient ? (darkMode ? <FaMoon fill={"black"} size={15} /> : <CiSun fill={"black"} size={35} />) : <></>}
						</motion.div>
					</div>
				</Navbar>
			</div>
		</div>
	)
}

export default Header