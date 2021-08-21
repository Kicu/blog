export type PostPageParams = { slug: string };

export enum PostLangs {
  en = 'en',
  pl = 'pl',
}

export type PostMetadata = {
  title: string;
  subhead: string;
  id: string;
  slug: string;
  createdDate: string;
  lang: PostLangs;
  isPrivate: boolean;
};

export interface Post {
  content: string;
  metadata: PostMetadata;
}

export interface SimplePostData {
  title: string;
  subhead: string;
  slug: string;
  date: string;
  lang: PostLangs;
}
