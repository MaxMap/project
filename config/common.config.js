/*
 * @Author: hao wenwen
 * @Date: 2019-11-07 10:45:53
 * @LastEditors: hao wenwen
 * @LastEditTime: 2019-11-20 11:24:40
 */
let online = true; // 线上下线环境切换 true：线上 false：线下
if (process.env.NODE_ENV === "development") {
  online = false;
}

module.exports = {
  common: {
    host: "192.168.1.47",
    port: 8080,
    // mgapi: 线上域名 ； mtest: 测试环境域名
    assetsPublicPath: online ?
      "//h.baidu.com/micro-end/gameCenter/" : "//h.baidu.com/micro-end/gameCenter/" // 打包域名
  },
  baseUrl: {
    api: online ? "//h5.baidu.com" : "//h5-test.baidu.com"
  },
  // homeUrl: online ?
  //   "//h.baidu.com/micro-end/gameCenter/index.html#/" :
  //   "//h.baidu.com/micro-end/gameCenter/index.html#/"
  // homeUrl: 'http://192.168.1.47:8080/#/' //本地测试地址
};
