function extractPostMetadata(data: any): PostMetadata {
  const title = 'title' in data ? data.title : '';
  const subhead =
    'subhead' in data ? data.subhead : 'Some generic subtitle here...';
  const id = 'id' in data ? data.id : '';
  const slug = 'slug' in data ? data.slug : '';
  const createdDate = 'createdDate' in data ? data.createdDate : '2020-02-20'; // Todo add sensible default
  const isPrivate = 'isPrivate' in data ? data.isPrivate : true;

  return {
    title,
    subhead,
    id,
    slug,
    createdDate,
    isPrivate,
  };
}

export { extractPostMetadata };
