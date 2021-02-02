const router = require('koa-router')()
const controller = require('../controller/blog')

router.prefix('/api/koa-blog/blog')

router.get('/', controller.list)
router.get('/:id', controller.detail)
router.post('/', controller.add)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
