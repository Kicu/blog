import { getRawPost } from './postsRepository';
import { convertMarkdownToPost } from './convertMarkdownToPost';
import { Post } from '../types';

/**
 * Returns full Post by slugname, includes:
 * - post metadata
 * - HTML markdown of the post itself
 */
async function getPost(slug: string): Promise<Post> {
  try {
    const rawPost = await getRawPost(slug);

    return convertMarkdownToPost(rawPost);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { getPost };
