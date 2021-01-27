import fs from 'fs';
import { promisify } from 'util';

const readDir = promisify(fs.readdir);

const mdExtensionRegex = /\.md/;
const dirPath = `posts/db`;

/**
 * Returns a list of all posts slugs.
 * Slug is the same as filename but without the file extension.
 *
 * @return {Promise<string[]>}
 */
async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await readDir(dirPath, 'utf8');
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
