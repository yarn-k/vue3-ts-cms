<template>
  <div class="login-panel">

    <h1 class="title">yarn后台管理系统</h1>

    <!-- 中间的tabs模块 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        
        <!-- 1. 帐号登录panel -->
        <el-tab-pane label="帐号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <panel-account ref="accountRef"></panel-account>
          <!-- <panel-account ref="accountRef" /> -->
        </el-tab-pane>

        <!-- 2. 手机登录panel -->
        <el-tab-pane label="手机登录" name="phone">
          <!-- 具名插槽（具有名字的插槽）使用 -->
          <template #label>
            <div class="label">
              <el-icon>
                <Cellphone />
              </el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone /> 
        </el-tab-pane>

      </el-tabs>

    </div>

    <div class="controls">
      <el-checkbox v-model="rememberPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button 
      class="login-btn" 
      type="primary" 
      size="large" 
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const activeName = ref('account')
// 默认不记住密码
// 选中还是未选中状态 v-model
const rememberPwd = ref(false)
// const accountRef = ref<InstanceType<typeof PanelAccount>>()
const accountRef = ref<InstanceType<typeof PanelAccount>>()
  
function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  } else {
    console.log("手机登录")
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .tabs {
    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        margin-left: 8px
      }
    }
  }
  .controls {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
