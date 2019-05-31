module.exports = {
    server: {
        port: Number(process.env.SERVER_PORT || 80),
        host: process.env.SERVER_HOST || 'my.domain.com',
    },
};
