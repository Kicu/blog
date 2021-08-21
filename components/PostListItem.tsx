import Link from 'next/link';
import { PostDate } from './PostListItem/PostDate';
import { SimplePostData } from '../pages/posts/index';

export function PostListItem({ post }: { post: SimplePostData }) {
  const postUrl = `/posts/${post.slug}`;
  return (
    <li key={post.slug} className="postsList__item">
      <Link href={postUrl}>
        <a className="postsList__itemLink">{post.title}</a>
      </Link>
      <p className="postsList__itemSubheading">{post.subhead}</p>
      <PostDate date={post.date} />
    </li>
  );
}
