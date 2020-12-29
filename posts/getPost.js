import fs from 'fs';
import { promisify } from 'util';

import markdownToHtml from './markdownToHtml';

const readFile = promisify(fs.readFile);

function getPost(slug) {
  const filePath = `posts/db/${slug}.md`;

  return readFile(filePath, 'utf8')
    .then((fileData) => {
      return markdownToHtml(fileData);
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export { getPost };
