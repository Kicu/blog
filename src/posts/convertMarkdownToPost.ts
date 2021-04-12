import remark from 'remark';
import html from 'remark-html';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import YAML from 'yaml';

import { extractPostMetadata } from './extractPostMetadata';

async function convertMarkdownToPost(markdown: string): Promise<Post> {
  const vFile = await parseMarkdownWithFrontmatter(markdown);

  const { title, subhead, id, slug, createdDate, isPrivate } = extractPostMetadata(
    vFile.data
  );

  return {
    content: vFile.toString(),
    metadata: {
      title,
      subhead,
      id,
      slug,
      createdDate,
      isPrivate,
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

export { convertMarkdownToPost };
