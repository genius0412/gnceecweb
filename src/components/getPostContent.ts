'use server';

import fs from 'fs';
import matter from 'gray-matter'
import path from 'path';

const getPostContent = async (slug: string) => {
	const filepath = path.join(process.cwd(), "src/", slug+".mdx");
	if(!fs.existsSync(filepath)) return 404;
	const content = fs.readFileSync(`${filepath}`, 'utf8');
	const mattered = matter(content);
	return {data: mattered.data, content: mattered.content};
}

export default getPostContent;