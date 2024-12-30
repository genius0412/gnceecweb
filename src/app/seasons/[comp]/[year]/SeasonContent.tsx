"use client";

import Markdown from 'markdown-to-jsx';
import React from 'react'

const SeasonContent = (props: any) => {
	const { postMetadata, postContent } = props;
	
	return (
		<div className="w-4/5 flex flex-col justify-start items-center">
			<h1 className="text-4xl font-black text-primary-light dark:text-primary-dark">{postMetadata.title}</h1>
			<h2 className="text-lg">{postMetadata.subtitle}</h2>
			<Markdown className="w-full mt-12 prose prose-h1:m-0 prose-h2:m-0 dark:prose-p:text-white prose-strong:text-emerald-600 dark:prose-strong:text-amber-200 dark:prose-invert">{postContent}</Markdown>
		</div>
	)
}

export default SeasonContent