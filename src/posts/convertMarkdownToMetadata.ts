import remark from 'remark';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import YAML from 'yaml';

import { extractPostMetadata } from './extractPostMetadata';

async function convertMarkdownToMetadata(
  markdown: string
): Promise<PostMetadata> {
  const vFile = await parseFrontmatterOnly(markdown);

  return extractPostMetadata(vFile.data);
}

/**
 * @private
 *
 * parses md file and returns vFile
 */
function parseFrontmatterOnly(markdown: string) {
  return remark()
    .use(frontmatter, ['yaml'])
    .use(extract, { yaml: YAML.parse })
    .process(markdown);
}

export { convertMarkdownToMetadata };
