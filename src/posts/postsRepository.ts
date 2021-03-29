import fs from 'fs';
import { promisify } from 'util';
import { postsBasePath } from '../consts';

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

const mdExtensionRegex = /\.md/;

async function getRawPost(fileName: string) {
  const filePath = `${postsBasePath}/${fileName}.md`;

  try {
    const fileData = await readFile(filePath, 'utf8');

    return fileData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getAllPostNames() {
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

export { getRawPost, getAllPostNames };
