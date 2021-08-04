const Koa = require("koa");
const serve = require("koa-static");
const path = require("path");
const chalk = require("chalk");
const logger = require("koa-logger");
const json = require("koa-json");
const bodyparser = require("koa-bodyparser");
const koaBody = require("koa-body");
const errorMessage = require("./middleware/error");

// jwt
const jwt = require("koa-jwt");
const { jwtSecret } = require("./utils/utils");

// routes
const blogs = require("./router/blog");
const cates = require("./router/cate");
const users = require("./router/user");
const cards = require("./router/card");

const app = new Koa();

// 上传文件大小
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
    },
  })
);
// 静态文件存放
app.use(serve(path.resolve(__dirname, "./public/")));

app.use(jwt({ secret: jwtSecret, passthrough: true }));

// middlewares
app.use(logger());
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());

// error tip
app.use(errorMessage);

app.use(blogs.routes(), blogs.allowedMethods());
app.use(cates.routes(), cates.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(cards.routes(), cards.allowedMethods());

app.listen(1202, function () {
  console.log(
    chalk.hex("#009966").bgHex("#FFCC99").bold(`IP：http://localhost:1202`)
  );
});
