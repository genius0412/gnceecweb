import React from 'react'
import { notFound } from 'next/navigation'
import getPostContent from '@/components/getPostContent'
import SeasonContent from './SeasonContent';

const SeasonOverview = async (props: any) => {
	const comp = String(props.params.comp);
	const year = String(props.params.year);	

	if(!['fll', 'ftc'].includes(comp)) notFound();

	const seasonData = await getPostContent("seasons/"+comp+"/"+year);

	return (
		<div className="mt-32 flex flex-col justify-center items-center">
			<div className="w-4/5 flex flex-col justify-start items-center">
				<h1>Season Overview: {comp.toUpperCase()}-{year}</h1>
				<SeasonContent postMetadata={seasonData.data} postContent={seasonData.content} />
			</div>
		</div>
	)
}

export default SeasonOverview