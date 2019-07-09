import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()

//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
fly.config.timeout=30000;
//设置请求基地址
fly.config.baseURL="https://unidemo.dcloud.net.cn/api/"
fly.config.headers={'content-type': 'application/x-www-form-urlencoded'}
const errorPrompt = (err) => {
	uni.showToast({
		title: err.message || 'fetch data error.',
		icon: 'none'
	})
}

fly.interceptors.request.use((request) => {
	// wx.showNavigationBarLoading()
	uni.showLoading({
		// title: '加载中'
	});
	return request
})

fly.interceptors.response.use((response, promise) => {
	// wx.hideNavigationBarLoading()
	uni.hideLoading();
	// if (!(response && response.data && response.data.res === 0)) {
	//   errorPrompt(response)
	// }
	return promise.resolve(response.data)
}, (err, promise) => {
	// wx.hideNavigationBarLoading()
	uni.hideLoading();

	errorPrompt(err)
	return promise.reject(err)
})

// GET请求使用方法
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    fly.get(url, {params})
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// POST请求使用方法
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    fly.post(url, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
