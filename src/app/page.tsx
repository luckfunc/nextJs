import Link from 'next/link';
import PostListLink from '@/app/blogs/PostList';

export default function Home() {
	const posts = [
		{
			id: 1,
			title: 'Image'
		},
		{
			id: 2,
			title: 'Post 2'
		},
		{
			id: 3,
			title: 'Post 3'
		}
	];
	return (
		<>
			<h1 className={'text-4xl text-orange-600'}>
				Hello Home Page
			</h1>
			<Link href='/dashboard'>
				Go to Dashboard
			</Link>
			<PostListLink posts={posts} />
		</>
	)
}
