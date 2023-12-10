'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PostListLink({
  posts
}: {
  posts: {
    id: number,
    title: string
  }[]
}) {
  const pathname = usePathname();
  return (
    <ul>
      {
        posts.map((item) => {
          const isActive = pathname.startsWith(`/blogs/${item.id}`);
          console.log('isActive', isActive);
          console.log('pathname', pathname);
          return (
            <li key={item.id}>
              <Link href={`/blogs/${item.id}`} className={isActive ? 'text-blue' : 'text-black'}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}