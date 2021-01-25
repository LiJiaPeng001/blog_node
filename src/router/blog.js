const router = require('koa-router')()
const controller = require('../controller/blog')

router.prefix('/api/blog')

router.get('/', controller.list)

module.exports = router
