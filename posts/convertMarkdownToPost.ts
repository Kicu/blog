import remark from 'remark';
import html from 'remark-html';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import YAML from 'yaml';
import { Post, PostMetadata } from "./getPost";

async function convertMarkdownToPost(markdown: string): Promise<Post> {
  const vFile = await parseMarkdownWithFrontmatter(markdown);

  const { title, id, createdDate } = extractPostMetadata(vFile.data);

  return {
    content: vFile.toString(),
    metadata: {
      title,
      id,
      createdDate
    },
  };
}

/**
 * @private
 *
 * parses md file and returns vFile
 */
function parseMarkdownWithFrontmatter(markdown: string) {
  return remark()
    .use(frontmatter, ['yaml'])
    .use(extract, { yaml: YAML.parse })
    .use(html)
    .process(markdown);
}

function isPostData(data: unknown): data is Record<string, unknown> {
  return data === "object" && data !== null;
}

/**
 * @private
 */
function extractPostMetadata(data: unknown): PostMetadata {
  const defaults = {
    title: '',
    id: 0,
    createdDate: new Date()
  };

  if (!isPostData(data)) {
    return defaults;
  }

  return {
    title: data.title ? String(data.title) : defaults.title,
    id: data.id ? Number(data.id) : defaults.id,
    createdDate: data.createdDate ? new Date(String(data.createdDate)) : defaults.createdDate,
  };
}

export { convertMarkdownToPost };
