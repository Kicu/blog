import { getAllPostNames, getRawPost } from './postsRepository';
import { convertMarkdownToMetadata } from './convertMarkdownToMetadata';

/**
 * Returns a list of all posts slugs.
 * Slug is the same as filename but without the file extension.
 *
 * @return {Promise<string[]>}
 */
async function getPostList(): Promise<PostMetadata[]> {
  const names = await getAllPostNames();

  const rawPosts = await Promise.all(
    names.map((postName) => getRawPost(postName))
  );

  const postsMetadata = await Promise.all(
    rawPosts.map((rawPost) => convertMarkdownToMetadata(rawPost))
  );

  return sortMetadataByDateDesc(postsMetadata);
}

/**
 * @private
 */
function sortMetadataByDateDesc(items: PostMetadata[]) {
  const sortedArray = items.slice();

  sortedArray.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);

    console.log(dateA, dateB)

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else return 0;
  });

  return sortedArray;
}

export { getPostList };
