type PostPageParams = { slug: string };

type PostMetadata = {
  title: string;
  id: string;
  slug: string;
  createdDate: string;
  isPrivate: boolean;
};

type Post = { content: string; metadata: PostMetadata };
