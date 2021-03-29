import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getPostList } from '../../src/posts/getPostList';

type SimplePostData = { title: string; slug: string; date: string };

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
              <div>
                🗓️<span className="postsList__itemDate">{post.date}</span>
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
