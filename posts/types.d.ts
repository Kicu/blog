type PostPageParams = { slug: string };

type Post = { content: string; metadata: PostMetadata };

type PostMetadata = { title: string; id: string; createdDate: string };
