const router = require('koa-router')()
const controller = require('../controller/user')

router.prefix('/common-user')

router.post('/login', controller.login)

module.exports = router
