import { useState, useRef } from 'react';

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center w-screen h-auto">
			<div className="flex flex-col justify-center items-center w-screen h-screen ">
				<h1 className="text-4xl font-black text-primary-light dark:text-primary-dark">About</h1>
				<p className="text-lg w-4/5">{"We are a team under GNCE (Galactic Narwhal Chicken Effect), based in Weston, MA, USA, consisting of nine 8th graders and two 9th graders. It was founded in 2022 as an FLL (First Lego League) team with the team number of 28140. "}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center w-screen h-screen">
				<h1 className="text-4xl font-black">Members</h1>
				<p className="text-lg w-4/5">{"Our team consists of 11 members, including 9 8th graders and 2 9th graders. We have a variety of skills and interests, ranging from coding to building to researching. "}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center w-screen h-screen">
				<h1 className="text-4xl font-black">2023 FLL MASTERPIECE</h1>
				<p className="text-lg w-4/5">{"Revere Qualifier Champion's Award"}
				</p>
			</div>
			<div className="flex flex-col justify-center items-center w-screen h-screen">
				<h1 className="text-4xl font-black">2022 FLL SUPERPOWERED</h1>
				<p className="text-lg w-4/5">{"Revere Qualifier Champion's Award"}
				</p>
			</div>
		</div>
	);
}

export default About;