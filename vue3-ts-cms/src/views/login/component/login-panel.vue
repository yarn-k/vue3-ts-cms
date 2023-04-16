<template>
    <div class="login-panel">
        
        <h1 class="title">yarn后台管理系统</h1>

        <!-- 中间的tabs模块 -->
        <div class="tabs">
          <el-tabs type="border-card" stretch>
            <el-tab-pane label="账号登录">
              <template #label>
                <div class="label">
                  <el-icon><UserFilled /></el-icon>
                  <span class="text">账号登录</span>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="手机登录">

              <template #label>
                <div class="label">
                  <el-icon><Cellphone /></el-icon>
                  <span class="text">手机登录</span>
                </div>
              </template>
             
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="controls">
          <el-checkbox 
            v-model="rememberPwd" 
            label="记住密码" 
            size="large" 
          />
          <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button 
          class="login-btn" 
          type="primary"
          size="large"    
        >
        立即登录
      </el-button>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// 默认不记住密码
// 选中还是未选中状态 v-model
const rememberPwd = ref(false)
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
