const router = require("koa-router")();
const controller = require("../controller/card");

router.prefix("/api/koa-blog/card");

router.post("/cardForm", controller.cardForm);
router.get("/", controller.list);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
