const router = require('koa-router')()
const controller = require('../controller/cate')

router.prefix('/koa-blog/cate')

router.get('/', controller.list)
router.post('/', controller.add)
router.put('/:id', controller.update)

module.exports = router
