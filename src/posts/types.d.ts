type PostPageParams = { slug: string };

type PostMetadata = { title: string; id: string; slug: string; createdDate: string };

type Post = { content: string; metadata: PostMetadata };
