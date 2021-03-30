# Blog

My personal blog powered by `nextjs` + `TypeScript` with articles stored as `*.md` files.  
This was created mostly for learning purposes and maybe for some thought-sharing as well in the future.

Deployed to github pages.

Available at: https://kicu.github.io/blog/posts


## Tech stack
 - [**nextjs**](https://github.com/vercel/next.js/) 9.5
 - [**React**](https://github.com/facebook/react) 16
 - [**remarkjs**](https://github.com/remarkjs/remark) (with plugins) for parsing md files 
 - **eslint** + **prettier** custom setup


## How this works
This is my first (non-trivial) project using nextjs + TypeScript.  
Also my first adventure with more JAM-ish architecture (https://jamstack.org)

**The basic gist is this:**  
Leverage nextjs static generation to have a simple blog, where every article would be a single `*.md` file (with some additional metadata) that gets transformed to html markdown and served by React.

So in 

### Articles format
Todo


## Things to improve/that I'm not happy with
 - add some tests
 - refactor file/directory structure of `src/posts` - not happy with 6-7 flat files laying there; possibly group them somehow by roles (repository/service/md parsing etc)
 - add stylelint
 - improve TS typings (enable strict mode?)
 