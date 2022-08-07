type RequiredKeys<Type> = NonNullable<
  { [key in keyof Type]: undefined extends Type[key] ? never : key }[keyof Type]
>;

// type OptionalKeys<Type> = Exclude<keyof Type, RequiredKeys<Type>>;

export type PostPageParams = { slug: string };

export enum PostLangs {
  en = 'en',
  pl = 'pl',
}

export interface PostMetadata {
  title: string;
  id: string;
  slug: string;
  createdDate: string;
  isPublic?: boolean;
  subhead?: string;
  lang?: PostLangs;
}

export const REQUIRED_POST_METADATA_PROPS: RequiredKeys<PostMetadata>[] = [
  'title',
  'id',
  'slug',
  'createdDate',
];

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
