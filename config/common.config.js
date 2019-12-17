/*
 * @Author: hao wenwen
 * @Date: 2019-11-07 10:45:53
 * @LastEditors: hao wenwen
 * @LastEditTime: 2019-11-20 11:24:40
 */
let online = 0; // 0 本地 1 测试 2 线上
if (process.env.NODE_ENV === "development") {
  online = 0;
} else {
  // 测试环境
  if (process.env.type === 'test') {
    online = 1;
    // 正式环境
  } else {
    online = 2;
  }
}

module.exports = {
  common: {
    host: "192.168.1.47",
    port: 8080,
    // mgapi: 线上域名 ； mtest: 测试环境域名
    assetsPublicPath: online == 2 ?
      "//h.baidu.com/micro-end/gameCenter/" : "//h5-test.baidu/micro-end/gameCenter/" // 打包域名
  },
  baseUrl: {
    api: online == 2 ? "//h5.baidu.com" : "//h5-test.baidu.com"
  },
  // homeUrl: online ?
  //   "//h.baidu.com/micro-end/gameCenter/index.html#/" :
  //   "//h.baidu.com/micro-end/gameCenter/index.html#/"
  // homeUrl: 'http://192.168.1.47:8080/#/' //本地测试地址
};
