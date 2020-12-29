import fs from 'fs';
import { promisify } from 'util';

const readDir = promisify(fs.readdir);

const mdExtensionRegex = /\.md/;

/**
 * Read posts dir and return list of all post slugs
 * Slug is the same as filename but without the file extension
 *
 * @return {Promise<string[]>}
 */
function getPostSlugs() {
  const dirPath = `posts/db`;

  return readDir(dirPath, 'utf8')
    .then((files) => {
      return files.map((fileName) => fileName.replace(mdExtensionRegex, ''));
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export { getPostSlugs };
