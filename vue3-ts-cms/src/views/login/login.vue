<template>
    <div class="login">
      

      <login-panel></login-panel>
    
    </div>
</template>

<script setup lang="ts">
import LoginPanel from './component/login-panel.vue'

</script>

<style lang="less" scoped>
.login {
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url('../../assets/images/login-bg.svg');
}
</style>
