import fs from 'fs';
import { promisify } from 'util';

import transformMarkdownToHtml from './transformMarkdownToHtml';

const readFile = promisify(fs.readFile);

/**
 * Returns HTML-string markdown of an article found by slugname
 */
async function getPost(slug: string) {
  const filePath = `posts/db/${slug}.md`;

  try {
    const fileData = await readFile(filePath, 'utf8');

    return transformMarkdownToHtml(fileData);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { getPost };
