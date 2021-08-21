import Link from 'next/link';
import { PostDate } from './PostListItem/PostDate';
import { SimplePostData, PostLangs } from '../types';

function renderTitle(title: string, lang: PostLangs) {
  return (
    <>
      <span>{title}</span>
      {lang === PostLangs.pl && <span> 🇵🇱</span>}
    </>
  );
}

export function PostListItem({ post }: { post: SimplePostData }) {
  const postUrl = `/posts/${post.slug}`;

  return (
    <li className="postsList__item">
      <Link href={postUrl}>
        <a className="postsList__itemLink">
          {renderTitle(post.title, post.lang)}
        </a>
      </Link>
      <p className="postsList__itemSubheading">{post.subhead}</p>
      <PostDate date={post.date} />
    </li>
  );
}
