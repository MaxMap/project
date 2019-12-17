import axios from 'axios'
import QS from 'qs';
// import utils from '@/assets/js/utils'

//请求超时时间。例如超过了10s，就会告知用户当前请求超时
axios.defaults.timeout = 10000

//axios默认请求头发起post的请求会发两遍，修改请求头后通过qs模块将数据处理后发送服务端
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getData(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postData(url, params) {
  // const device = JSON.parse(localStorage.getItem("loginInfo"));
  // params.sdkver = device.sdkver;
  // params.os = device.os || utils.browserVersions();
  // params.mid = winOcx.browser.ios ? device.mid : device.androidId;
  // params.source = device.source;

  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
