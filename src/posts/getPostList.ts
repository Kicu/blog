import getConfig from 'next/config';

import { getAllPostNames, getRawPost } from './postsRepository';
import { convertMarkdownToMetadata } from './convertMarkdownToMetadata';
import { PostMetadata } from '../types';

const { publicRuntimeConfig } = getConfig();

/**
 * Returns a list of all posts metadata
 * May filter out posts marked that are not marked as public
 *
 * @return {Promise<string[]>}
 */
async function getPostList(): Promise<PostMetadata[]> {
  const names = await getAllPostNames();

  const rawPosts = await Promise.all(names.map(getRawPost));

  const postsMetadata = await Promise.all(
    rawPosts.map(convertMarkdownToMetadata)
  );

  const sorted = sortMetadataByDateDesc(postsMetadata);

  if (publicRuntimeConfig.showPrivatePosts) {
    return sorted;
  }

  return sorted.filter((metadata) => metadata.isPublic);
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
