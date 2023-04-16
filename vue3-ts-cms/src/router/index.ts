import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系： path --> component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      // 懒加载  魔法注释
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    // 匹配不正确路径
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/notFound/NotFound.vue')
    }
  ]

})

// 路由守卫  判断有没有登录  没有登录跳转到登录页面

export default router