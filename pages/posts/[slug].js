import { getPost } from '../../posts/getPost';
import { getPostSlugs } from '../../posts/getPostSlugs';

function PostPage({ post }) {
  return <main dangerouslySetInnerHTML={{ __html: post }} />;
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const post = await getPost(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 5, // seconds
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  console.log(postSlugs);

  const paths = postSlugs.map((postSlug) => ({
    params: { slug: postSlug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default PostPage;
