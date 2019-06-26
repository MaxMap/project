import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

 const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    }
  ]
})
// 全局导航守卫
router.beforeEach((to, from, next) => {
  // console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  console.log(to)
  const nextRoute = ['home']; //需要判断是否登录的所有的路由名称
  let isLogin = true // 是否登录
  // // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('未登录');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至index
  if (to.name === 'login') {
    if (isLogin) {
      console.log("已登录")
      router.push({ name: 'Home'});
    }
  }
  next();
});
export default router