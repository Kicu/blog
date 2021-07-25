import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getPostList } from '../../src/posts/getPostList';
import { formatDate } from '../../src/utils/formatDate';

type SimplePostData = {
  title: string;
  subhead: string;
  slug: string;
  date: string;
};

function PostsIndexPage({ posts }: { posts: SimplePostData[] }) {
  return (
    <main>
      <ul className="postsList">
        {posts.map((post) => {
          const postUrl = `/posts/${post.slug}`;
          return (
            <li key={post.slug} className="postsList__item">
              <Link href={postUrl}>
                <a className="postsList__itemLink">{post.title}</a>
              </Link>
              <p className="postsList__itemSubheading">{post.subhead}</p>
              <div>
                🗓️
                <span className="postsList__itemDate">
                  {formatDate(post.date)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostList();

  const formattedPosts = posts.map((postMetadata) => ({
    title: postMetadata.title,
    subhead: postMetadata.subhead,
    slug: postMetadata.slug,
    date: postMetadata.createdDate,
  }));

  return {
    props: {
      posts: formattedPosts,
    },
  };
};

export default PostsIndexPage;
