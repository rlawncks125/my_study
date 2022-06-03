# 공부 정리 사이트



***

# Heroku 배포
## Procfile를 이용한 heroku Configure Dynos 명령어 수정

```js
//  Procfile
web: npm run start:prod // 실행할 명령어
```



# netlify 배포 추가 설정
### 환경변수 추가

NODE_VERSION=14.17.5

## netlify.toml 파일에 프록시 설정 추가

```
// netlify.toml

[[redirects]]
  from = "/api/*"
  to = "https://pofol-backend.herokuapp.com/:splat"
  status = 200



[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

```

## build시 netlify.toml파일 dist폴더에 복사

```js
//package.js
{
  ...
  "build": "vue-cli-service build && cp ./netlify.toml ./dist",
  ...
}
```
