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
  gid: online ? 17 : 16,
  chid: 30,
  source: "9xiu" || "nextjoy",
  sdkver: "1.2.1",
  captchaId: "b88e6b7e1cdc4d9cb2da2a689619b60f",
  common: {
    host: "192.168.1.47",
    port: 8080,
    // mgapi: 线上域名 ； mtest: 测试环境域名
    assetsPublicPath: online
      ? "//h.nextjoy.com/micro-end/gameCenter/"
      : "//h.nextjoy.com/micro-end/gameCenter/" // 打包域名
  },
  baseUrl: {
    api: online ? "//h5.nextjoy.com" : "//h5-test.nextjoy.com"
  },
  homeUrl: online
    ? "//h.nextjoy.com/micro-end/gameCenter/index.html#/"
    : "//h.nextjoy.com/micro-end/gameCenter/index.html#/"
  // homeUrl: 'http://192.168.1.47:8080/#/' //本地测试地址
};
