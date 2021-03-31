# Blog

My personal blog powered by `nextjs` + `TypeScript` with articles stored as `*.md` files.  
This was created mostly for learning purposes and maybe in future for some thought-sharing process as well.

Deployed to GitHub Pages.

Available at: https://kicu.github.io/blog/posts


## Tech stack
 - [**nextjs**](https://github.com/vercel/next.js/) 9.5
 - [**React**](https://github.com/facebook/react) 16
 - [**remarkjs**](https://github.com/remarkjs/remark) (with plugins) for parsing md files 
 - **eslint** + **prettier** custom setup
 - styled with pure vanilla CSS (yes!)


## About the project
This is my first (non-trivial) project using nextjs + TypeScript.  
Also my first adventure with a JAM-ish architecture (https://jamstack.org)

**The basic gist is this:**  
Leverage nextjs static generation to have a simple blog, where every article would be a single `*.md` file (with some additional metadata) that gets transformed to html markdown and served by React.

My current intention is to keep this as purely static (SSG).
I'm not using any kind of SSR/refreshing capabilities that come from next. The main caveat is that a new build will have to be made manually every time a new post is added. This should be good enough for now.

### How it works ⚙️
There are 3 pages
 - `/` - static empty page (with dynamic redirect to `/posts`), might be used in future to serve something
 - `/posts` - list of all posts, no pagination yet
 - `/posts/<slug>` - a single post page

Posts are kept in `/db` directory which is gitignored. This is because I don't want to publish all the sources of my posts to version control, as it is not needed for the site to work.  
In addition I plan to have some private posts which I would like to not be available on web.  
The obvious downside to this setup is that the build can only work on my local machine where there are posts - CI builds would not work.  
My mind model is that this `/db` directory can be treated like a database

For `/posts` page:
 - read the whole "db" directory to get a list of posts
 - parse markdown to extract metadata using YAML Front Matter [see below](#front-matter)
 - pass to nextjs page component

For `/posts/<slug>` page:
 - read a single file by the provided slug (filename)
 - parse markdown, extract metadata and transform markdown into html using `remark`
 - pass the post/metadata to nextjs page
 - this page also requires the list of all posts via `getStaticPaths` to be able to pre-render every Post page on in build time

Actual post content is injected to frontend via the notorious `dangerouslySetInnerHTML` React prop.
Since posts come from "db" and are transformed on the server side only there should be no `XSS` surface (I hope).

### Posts format 📄
The posts are simple markdown files. 1 post == 1 `*.md` file.  
In future I could consider also supporting `mdx` format

#### Front Matter
I learned about Front Matter from [docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter).  
It's a tiny bit of header containing some data, separated from the rest of the docs by a special delimiter (`---` in my case):
```
---
some: data
foo: bar
---
```

In this project it is used to keep post metadata like: `title`, `html slug` of the post etc.


### Deployment
Currently deployment is done manually via running `build-gh-pages` script, commiting build artifacts to a dedicated branch in git and then pushing the commit to remote.

I have setup GitHub Pages to be served from branch `static-build` from directory `/docs`.


## Things to improve/that I'm not happy with 🔨
 - add some tests
 - refactor file/directory structure of `src/posts` - not happy with 6-7 flat files laying there; possibly group them somehow by roles (repository/service/md parsing etc)
 - add stylelint
 - improve TS typings (enable strict mode?)
 - automatic deployment


## Useful links and sources
- Configuring nextjs static export for github pages: [https://wallis.dev/blog/next-js-basepath-and-assetprefix](https://wallis.dev/blog/next-js-basepath-and-assetprefix)
- Github Pages: https://docs.github.com/en/github/working-with-github-pages/about-github-pages#static-site-generators (keep in mind `.nojekyll` trick)
- Extremely helpful article about basics of clean webpage design: [web design in 4 minutes](https://jgthms.com/web-design-in-4-minutes/)