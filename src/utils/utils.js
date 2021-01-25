const errorMessage = (status = 400, msg = '有未知错误哦') => {
  const err = new Error(msg)
  err.status = status
  err.expose = true
  throw err
}
const jwtSecret = '@#$LiXiaoPeng520=' // jwt密钥

const SECRET_KET = 'lijiapeng_521' // 加密密钥

const maxAge = 1 * 60 * 60 * 24 * 30

module.exports = {
  errorMessage,
  jwtSecret,
  maxAge,
  SECRET_KET,
}
