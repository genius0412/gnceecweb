import getPostContent from '@/components/getPostContent';
import getPostMetadata from '@/components/getPostMetadata';
import { Redis } from '@upstash/redis';
import Post from './Post';
import { notFound } from 'next/navigation';

const redis = Redis.fromEnv()

export const generateStaticParams = async () => {
	const posts = getPostMetadata();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

const postPage = async (props: any) => {
	const slug = props.params.slug;
	const postContent = await getPostContent("posts/"+slug);
	const likes: string | null = await redis.get(`likes:post:${slug}`);
	const views: string | null = await redis.get(`views:post:${slug}`);

	if(postContent == 404) notFound();

	return (
		<Post slug={slug} postContent={postContent} views={views} likes={likes} />
	);
}

export default postPage;