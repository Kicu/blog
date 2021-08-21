import { GetStaticProps } from 'next';

import { getPostList } from '../../src/posts/getPostList';
import { PostListItem } from '../../components/PostListItem';

export type SimplePostData = {
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
          return <PostListItem post={post} />;
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
