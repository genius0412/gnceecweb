import React from 'react'
import { notFound } from 'next/navigation'

const seasonOverview = (props: any) => {
	const comp = String(props.params.comp);
	const year = String(props.params.year);	

	if(!['fll', 'ftc'].includes(comp)) notFound();

	return (
		<div className="mt-32 flex flex-col justify-center items-center">
			<div className="w-4/5 flex flex-col justify-start items-center">
				<h1>Season Overview: {comp.toUpperCase()}-{year}</h1>
			</div>
		</div>
	)
}

export default seasonOverview