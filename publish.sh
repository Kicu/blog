git checkout static-build
npm run build-gh-pages
git add .
git commit -m "chore: add poem"
git push origin static-build