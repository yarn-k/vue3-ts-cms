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

<style lang="less" scoped>
.main {
  color: red;
}
</style>


