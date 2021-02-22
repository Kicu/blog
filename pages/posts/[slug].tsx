import { GetStaticPaths, GetStaticProps } from 'next';

import { getPost } from '../../posts/getPost';
import { getPostSlugs } from '../../posts/getPostSlugs';

function PostPage({
  postContent,
  title,
  date,
}: {
  postContent: string;
  title: string;
  date: string;
}) {
  return (
    <main>
      <article>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
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
