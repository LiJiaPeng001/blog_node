const Koa = require('koa')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const errorMessage = require('./middleware/error')

// jwt
const jwt = require('koa-jwt')
const { jwtSecret } = require('./utils/utils')

// routes
const blogs = require('./router/blog')
const cates = require('./router/cate')

const app = new Koa()

app.use(jwt({ secret: jwtSecret, passthrough: true }))

// middlewares
app.use(logger())
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())

// error tip
app.use(errorMessage)

app.use(blogs.routes(), blogs.allowedMethods())
app.use(cates.routes(), cates.allowedMethods())

app.listen(1202)
