import remark from 'remark';
import html from 'remark-html';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import YAML from 'yaml';

async function convertMarkdownToPost(markdown: string): Promise<Post> {
  const vFile = await parseMarkdownWithFrontmatter(markdown);

  const { title, id, createdDate } = extractPostMetadata(vFile.data);

  return {
    content: vFile.toString(),
    metadata: {
      title,
      id,
      createdDate,
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

/**
 * @private
 */
function extractPostMetadata(data: any) {
  const title = 'title' in data ? data.title : '';
  const id = 'id' in data ? data.id : '';
  const createdDate = 'createdDate' in data ? data.createdDate : '2020-02-20'; // Todo add sensible default

  return {
    title,
    id,
    createdDate,
  };
}

export { convertMarkdownToPost };
