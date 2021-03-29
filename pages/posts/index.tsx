import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getPostSlugs } from '../../posts/getPostSlugs';

function PostsIndexPage({ postSlugs }: { postSlugs: string[] }) {
  return (
    <main>
      <ul className="postsList">
        {postSlugs.map((slug) => {
          const postUrl = `/posts/${slug}`;
          return (
            <li key={slug} className="postsList__item">
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
