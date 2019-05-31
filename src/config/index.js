module.exports = require('load-config-js')(
    __dirname,
    'default',
    `${process.env.NODE_ENV || 'development'}`,
    'local',
);

/*
현재 디렉터리에서 default.js, [NODE_ENV].js, local.js 순으로 설정을 읽어서 덮어씌움
local.js 파일은 로컬 개발용이므로 git에 넣지 않음.

load-config-js 는 자주 쓰는 코드를 모듈로 분리해 뒀으니 소스 참고하면 됨.
*/