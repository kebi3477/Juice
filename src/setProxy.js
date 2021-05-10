import proxy from 'http-proxy-middleware';

export default function(app) {
    app.use(
        proxy('/user', {
            target: 'http://localhost:3002/',
            changeOrigin: true
        })
    )
}