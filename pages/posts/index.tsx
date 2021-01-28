import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getPostSlugs } from '../../posts/getPostSlugs';

function PostsIndexPage({ postSlugs }: { postSlugs: string[] }) {
  return (
    <main>
      <h1>Posts list</h1>
      <ul>
        {postSlugs.map((slug) => {
          const postUrl = `/posts/${slug}`;
          return (
            <li key={slug}>
              <Link href={postUrl}>
                <a>{slug}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postSlugs = await getPostSlugs();

  return {
    props: {
      postSlugs,
    },
  };
};

export default PostsIndexPage;
