const qiniu = require('qiniu')
const accessKey = 'C-MFZT4qGCOZqOlZ04-96mnLlvM15B1ovq3pEhY2'
const secretKey = 'xkapXIJ-qNZDeTDQLG-909dnmFgBzALZY_eMr2HV'
const bucket = 'mcljp'

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

const options = {
  scope: bucket,
  expires: 60 * 60 * 24 * 30,
  returnBody: '{ "key": "$(key)", "url": "http://img.ljpeng.fun/$(key)" }',
  callbackBodyType: 'application/json',
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = uploadToken
