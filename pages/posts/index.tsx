import { GetStaticProps } from 'next';
import { getPostList } from '../../src/posts/getPostList';
import { PostListItem } from '../../src/components/PostListItem';
import { SimplePostData } from '../../src/types';

function PostsIndexPage({ posts }: { posts: SimplePostData[] }) {
  return (
    <main>
      <ul className="postsList">
        {posts.map((post) => {
          return <PostListItem key={post.slug} post={post} />;
        })}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostList();

  const formattedPosts = posts.map((postMetadata) => ({
    title: postMetadata.title,
    subhead: postMetadata.subhead || '',
    slug: postMetadata.slug,
    date: postMetadata.createdDate,
    lang: postMetadata.lang,
  }));

  return {
    props: {
      posts: formattedPosts,
    },
  };
};

export default PostsIndexPage;
