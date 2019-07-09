const BASE_URL = 'https://unidemo.dcloud.net.cn/api/';
export function fetch (url, data = {}) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: BASE_URL + url,
      data: data,
      // header: {
      //   token1: 13
      // },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export function post (url, data = {}) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: BASE_URL + url,
      data: data,
      // header: {
      //   token1: 13
      // },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}