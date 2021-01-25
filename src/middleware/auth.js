module.exports = async (ctx, next) => {
  let { user } = ctx.state
  if (!user) {
    return ctx.throw(401)
  }
  await next()
}
