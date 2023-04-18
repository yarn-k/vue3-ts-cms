<template>
    <div class="panel-account">
      <el-form 
        :model="account" 
        label-width="60px"
        :rules="accountRules"
        size="large"

      >
        <el-form-item label="帐号" prop="name">
          <el-input v-model="account.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="account.password" show-password />
        </el-form-item>
      </el-form>
    </div>
</template>

<script setup lang="ts">

import type { FormRules } from 'element-plus';
import { reactive } from 'vue'
// 1. 定义account数据
const account = reactive({
  name: '',
  password: ''
})

// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    {
      // trigger: 'blur' 失去焦点时认证
      required: true, message: '必须输入帐号信息', trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,20}$/, 
      message: '必须是6-20位的字母或数字组成', 
      trigger: 'blur'
    }
   
  ],
  password: [
    {
      required: true, message: '必须输入密码信息', trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/, 
      message: '必须是3位以上的字母或数字组成', 
      trigger: 'blur'
    }
  ]
}

//  3. 执行帐号的登录逻辑
function loginAction() {
  console.log(account.name, account.password)
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>

</style>
