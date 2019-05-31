// 특정 디렉터리의 alias를 제공함
// package.json 파일 참고
require('module-alias/register');

// .env 파일을 읽어서 process.env에 추가해줌
// NODE_ENV=develpomemnt 와 같이 추가할 수 있음
// .env 파일은 git에 추가하지 않는 것을 추천함
require('dotenv').config();

const config = require('@/config');

console.dir(config);
