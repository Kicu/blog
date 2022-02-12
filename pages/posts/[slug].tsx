import { GetStaticPaths, GetStaticProps } from 'next';

import { getPost } from '../../src/posts/getPost';
import { getPostList } from '../../src/posts/getPostList';
import { formatDate } from '../../src/utils/formatDate';
import { PostPageParams, PostMetadata } from '../../src/types';

function PostPage({
  postContent,
  title,
  date,
}: {
  postContent: string;
  title: string;
  date: string;
}): JSX.Element {
  return (
    <main>
      <article className="post">
        <header>
          <p className="createdDate">{formatDate(date)}</p>
          <h1 className="postTitle">{title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </article>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: PostPageParams;
}) => {
  const post = await getPost(params.slug);

  return {
    props: {
      postContent: post.content,
      title: post.metadata.title,
      date: post.metadata.createdDate,
    },
    revalidate: 5, // seconds
  };
};

/**
 * This tells next which paths I expect to render.
 * Required to use static generation.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostList();
  const paths = formatPaths(posts);

  return {
    paths,
    fallback: false, // 'false' is required for `next export` to work
  };
};

/**
 * @private
 */
function formatPaths(postsMetadata: PostMetadata[]) {
  return postsMetadata.map((metadata) => ({
    params: { slug: metadata.slug },
  }));
}

export default PostPage;
