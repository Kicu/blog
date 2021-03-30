# Blog

My personal blog powered by `nextjs` + `TypeScript` with articles stored as `*.md` files.  
This was created mostly for learning purposes and maybe in future for some thought sharing as well.

Deployed to github pages.

Available at: https://kicu.github.io/blog/posts


## Tech stack
 - [**nextjs**](https://github.com/vercel/next.js/) 9.5
 - [**React**](https://github.com/facebook/react) 16
 - [**remarkjs**](https://github.com/remarkjs/remark) (with plugins) for parsing md files 
 - **eslint** + **prettier** custom setup
 - styled with pure vanilla CSS (so awesome!)


## How this works
This is my first (non-trivial) project using nextjs + TypeScript.  
Also my first adventure with a JAM-ish architecture (https://jamstack.org)

**The basic gist is this:**  
Leverage nextjs static generation to have a simple blog, where every article would be a single `*.md` file (with some additional metadata) that gets transformed to html markdown and served by React.

My current intention is to keep this as purely static (SSG).
I'm not using any kind of SSR/refreshing capabilities that come from next. The main caveat is that a new build will have to be made manually every time a new post is added. This should be good enough for now.

### Code
There are 3 pages
 - `/` - static empty page (with dynamic redirect to `/posts`), might be used in future to serve something
 - `/posts` - list of all posts, no pagination yet
 - `/posts/<slug>` - a single post page

_Todo (basic description how posts are served and rendered)_

### Posts format
_Todo_


### Deployment
Currently deployment is done manually via running `build-gh-pages` script, commiting build artifacts to a dedicated branch in git and then pushing the commit to remote.

I have setup GitHub Pages to be served from branch `static-build` from directory `/docs`.


## Things to improve/that I'm not happy with
 - add some tests
 - refactor file/directory structure of `src/posts` - not happy with 6-7 flat files laying there; possibly group them somehow by roles (repository/service/md parsing etc)
 - add stylelint
 - improve TS typings (enable strict mode?)
 - automatic deployment


## Useful links and sources
- Configuring nextjs static export for github pages: [https://wallis.dev/blog/next-js-basepath-and-assetprefix](https://wallis.dev/blog/next-js-basepath-and-assetprefix)