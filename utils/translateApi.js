//引入md5
import md5 from './md5.min.js'

const appid = '20220228001102345'
const key = '4UVvIk3pYW0XMnZ8Fh65'

function translate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) {
  return new Promise((resolve, reject) => {
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        if (res.data && res.data.trans_result) {
          resolve(res.data)
        } else {
          reject({ status: 'error', msg: '翻译失败' })
          wx.showToast({
            title: '翻译成功',
            icon: 'none',
            duration: 1000
          })
        }
      },
      fail() {
        reject({ status: 'error', msg: '翻译失败' })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
}
module.exports.translate = translate