const router = require("koa-router")();
const controller = require("../controller/keep");

router.prefix("/api/koa-blog/keep");

router.get("/", controller.list);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
