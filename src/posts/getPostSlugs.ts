import fs from 'fs';
import { promisify } from 'util';
import { postsBasePath } from '../consts';

const readDir = promisify(fs.readdir);

const mdExtensionRegex = /\.md/;

/**
 * Returns a list of all posts slugs.
 * Slug is the same as filename but without the file extension.
 *
 * @return {Promise<string[]>}
 */
async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await readDir(postsBasePath, 'utf8');
    const slugs = files.map((fileName) =>
      fileName.replace(mdExtensionRegex, '')
    );

    return slugs;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { getPostSlugs };
