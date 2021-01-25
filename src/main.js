const Koa = require('koa')
const Router = require('koa-router')
// routes
const blogs = require('./router/blog')

const app = new Koa()
const router = new Router()

app.use(blogs.routes(), blogs.allowedMethods())

app.listen(1202)
