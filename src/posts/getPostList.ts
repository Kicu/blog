import { getAllPostNames, getRawPost } from './postsRepository';
import { convertMarkdownToMetadata } from './convertMarkdownToMetadata';

/**
 * Returns a list of all posts metadata
 * May filter out posts marked as "private"
 *
 * @return {Promise<string[]>}
 */
async function getPostList({
  filterPrivate,
}: {
  filterPrivate: boolean;
}): Promise<PostMetadata[]> {
  const names = await getAllPostNames();

  const rawPosts = await Promise.all(
    names.map((postName) => getRawPost(postName))
  );

  const postsMetadata = await Promise.all(
    rawPosts.map((rawPost) => convertMarkdownToMetadata(rawPost))
  );

  const sorted = sortMetadataByDateDesc(postsMetadata);

  if (filterPrivate) {
    return sorted.filter((metadata) => !metadata.isPrivate);
  }
  return sorted;
}

/**
 * @private
 */
function sortMetadataByDateDesc(items: PostMetadata[]) {
  const sortedArray = items.slice();

  sortedArray.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else return 0;
  });

  return sortedArray;
}

export { getPostList };
