import { GetStaticPaths, GetStaticProps } from 'next';

import { getPost } from '../../posts/getPost';
import { getPostSlugs } from '../../posts/getPostSlugs';

function PostPage({ postContent }: { postContent: string }) {
  return <main dangerouslySetInnerHTML={{ __html: postContent }} />;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: PostPageParams;
}) => {
  const post = await getPost(params.slug);

  return {
    props: {
      postContent: post.content
    },
    revalidate: 5, // seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = await getPostSlugs();
  const paths = formatPaths(postSlugs);

  return {
    paths,
    fallback: true,
  };
};

/**
 * @private
 */
function formatPaths(postSlugs: string[]) {
  return postSlugs.map((postSlug) => ({
    params: { slug: postSlug },
  }));
}

export default PostPage;
