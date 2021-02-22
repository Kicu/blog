import fs from 'fs';
import { promisify } from 'util';
import { postsBasePath } from "./consts";

import { convertMarkdownToPost } from './convertMarkdownToPost';

const readFile = promisify(fs.readFile);

export type PostMetadata = {
  title: string;
  id: number;
  createdDate: Date;
};
export type Post = {
  content: string;
  metadata: PostMetadata
};

/**
 * Returns HTML-string markdown of an article found by slugname
 */
async function getPost(slug: string): Promise<Post> {
  const filePath = `${postsBasePath}/${slug}.md`;

  try {
    // @Todo wrap readFile() into some kind of Repository-ish object
    const fileData = await readFile(filePath, 'utf8');

    return convertMarkdownToPost(fileData);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { getPost };
