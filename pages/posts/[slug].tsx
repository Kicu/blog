import { GetStaticPaths, GetStaticProps } from 'next';

import { getPostContent } from '../../posts/getPostContent';
import { getPostSlugs } from '../../posts/getPostSlugs';

type PostParams = { slug: string };

function PostPage({ postContent }: { postContent: string }) {
  return <main dangerouslySetInnerHTML={{ __html: postContent }} />;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: PostParams;
}) => {
  const postContent = await getPostContent(params.slug);

  return {
    props: {
      postContent,
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
