const About = () => {
	return (
		<div className="flex flex-col justify-center items-center w-screen h-auto">
			<div className="w-[90%] xl:w-[60%] flex flex-col justify-center items-center min-h-screen prose prose-h1:m-0 prose-h2:m-0 dark:prose-p:text-white prose-strong:text-emerald-600 dark:prose-strong:text-amber-200 dark:prose-invert">
				<h1 className="text-4xl font-black text-primary-light dark:text-primary-dark">About</h1>
				<p className="text-lg">
					{"We are a team under GNCE (Galactic Narwhal Chicken Effect), based in Weston, MA, USA, consisting of nine 8th graders and two 9th graders. It was founded in 2022 as an FLL (First Lego League) team with the team number of 28140. We transitioned to FTC in 2024, which means we are in our rookie season!"}
				</p>
			</div>
		</div>
	);
}

export default About;