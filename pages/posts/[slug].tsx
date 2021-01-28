import { GetStaticPaths, GetStaticProps } from 'next';

import { getPost } from '../../posts/getPost';
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
  console.log(params);
  const post = await getPost(params.slug);

  return {
    props: {
      postContent: post,
    },
    revalidate: 5, // seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = await getPostSlugs();

  const paths = postSlugs.map((postSlug) => ({
    params: { slug: postSlug },
  }));

  console.log('static paths', paths);

  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
