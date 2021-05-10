const router = require('koa-router')()
const controller = require('../controller/user')

router.prefix('/api/common-user')

router.post('/login', controller.login)
router.post('/upload', controller.upload)
router.post('/uploadToken', controller.uploadToken)

module.exports = router
