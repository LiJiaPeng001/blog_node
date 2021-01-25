/**
 * @description 加密算法
 */

const { SECRET_KET } = require('./utils')

const crypto = require("crypto")

function md5(str) {
    const md5 = crypto.createHash('md5')
    return md5.update(str).digest('hex')
}

module.exports = str => md5(`${str}_${SECRET_KET}`)