import { PostMetadata, REQUIRED_POST_METADATA_PROPS } from '../types';

const isPostMetadata = (data: unknown): data is PostMetadata =>
  Boolean(
    data &&
      typeof data === 'object' &&
      REQUIRED_POST_METADATA_PROPS.every((propName) => propName in data)
  );

function extractPostMetadata(data: unknown): PostMetadata {
  if (!isPostMetadata(data)) {
    throw new Error('missing metadata');
  }

  const { title, id, slug, subhead, createdDate, lang, isPublic } = data;

  return {
    title,
    id,
    slug,
    subhead,
    createdDate,
    lang,
    isPublic,
  };
}

export { extractPostMetadata };
