### vue3-ts-cms
#### 准备工作
##### day01
1. 创建目录 router  store  utils hooks service base-ui views 
2. 初始化项目  vite 方式， 特点：快
   ```
   npm init vue@latest
   ```
3. 配置文件
4. 引入样式
   1. reset重置样式
      ```less
      /* reset.css样式重置文件 */
      /* margin/padding重置 */
      body, h1, h2, h3, ul, ol, li, p, dl, dt, dd {
        padding: 0;
        margin: 0;
      }
      /* a元素重置 */
      a {
        text-decoration: none;
        color: #333;
      } 
      /* img的vertical-align重置 */
      img {
        vertical-align: top;
      }
      /* ul, ol, li重置 */
      ul, ol, li {
        list-style: none;
      } 
      /* 对斜体元素重置 */
      i, em {
        font-style: normal;
      }
      ```
   2. common公共样式
   3. index主页样式
      ```less
      // 引入样式
      @import './common.less';
      @import './reset.less';
      ```
   4. normalize.css样式
      ```
      1. 安装 npm install normalize.css
      2. 引入 import "normalize.css"
      ```
   5. 引入样式 main.ts
      ```ts
      import 'normalize.css'
      import './assets/css/index.less'
      ```
5. 配置路由
   1. 安装路由
      ```
      npm install vue-router 
      ```
      创建router文件夹 、index.ts文件
      创建views文件夹 、创建loginView、mainView
   2. 配置路由
      ```ts
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
            component: () => import('@/views/main/main.vue')
          },
          {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/login.vue')
          },
          <!-- 匹配不正确的地址 -->
          {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/notFound/notFound.vue')
          }
        ]
      })
      // 路由守卫  判断有没有登录  没有登录跳转到登录页面
      export default router
      ```
   3. 使用路由
      1. ```
         const app = createApp(App)
         app.use(router)
         app.use(ElementPlus)
         app.mount('#app')
         ```
      2. 

6. 配置状态管理pinia
    1. 安装 npm install pinia
    2. 配置pinia   新建store index.ts
      ```ts
      import { createPinia } from 'pinia'
      const pinia = createPinia()
      export default pinia
      ```
    3. 新建store文件夹  counter.ts
      ```ts
      import { defineStore } from "pinia";

      const useCountPinia = defineStore('count', {
        state: () => ({
          counter: 100
        }),
        getters: {
          doubleCounter(state) {
            return state.counter * 2
          }
        },
        actions: {
          changeCounterAction(newCounter: number) {
            this.counter = newCounter
          }
        }
      })

      export default useCountPinia
      ```
    4. 使用pinia
      ```  vue
    <template>
    <div class="main">
        <h2>{{ counterPinia.counter }}--{{ counterPinia.doubleCounter }}</h2>
        <button @click="counterClick">修改counter</button>
    </div>
    </template>

    <script setup lang="ts">
    import useCountPinia from '@/store/counter';
    const counterPinia = useCountPinia()

    function counterClick() {
      counterPinia.changeCounterAction(1000)
    }
    </script>
      ```
      
7. axios网络请求


8. 生产环境和开发环境配置

##### day02
1. 集成element plus
   1. 按需引入
   2. 全局引入  参考官方文档  
    app.use(ElementPlus)  全局注册组件  方便和便捷  缺点：打包体积大  没有按需引入方便
    引入element plus的css样式
    import 'element-plus/dist/index.css'

2. 登录页的实现 
   1. 引入icon  官方文档  
      > https://element-plus.gitee.io/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88
   2. 使用具名插槽  
   ```vue
      <template #label>
        <div class="label">
            <!-- icon图标  -->
          <el-icon><UserFilled /></el-icon>
          <span class="text">账号登录</span>
        </div>
      </template>
   ```

3. 登录页面的路由守卫


