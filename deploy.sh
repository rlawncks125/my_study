#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'study.kimjuchan97.site' > CNAME

git init
git add -A
git commit -m 'deploy'



# 빌드한 파일을 gh-pages 브랜치에 할당하고 자동으로 pages설정
git push -f git@github.com:rlawncks125/my_study master:gh-pages

cd -
