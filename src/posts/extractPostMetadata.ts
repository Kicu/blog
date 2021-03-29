function extractPostMetadata(data: any): PostMetadata {
  const title = 'title' in data ? data.title : '';
  const id = 'id' in data ? data.id : '';
  const slug = 'slug' in data ? data.slug : '';
  const createdDate = 'createdDate' in data ? data.createdDate : '2020-02-20'; // Todo add sensible default

  return {
    title,
    id,
    slug,
    createdDate,
  };
}

export { extractPostMetadata };
