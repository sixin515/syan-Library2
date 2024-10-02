<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue'; 
import CountBookAPI from './views/CountBookAPI.vue'; // 导入 CountBookAPI 组件

export default {
  name: 'App',
  components: {
    BHeader,
    CountBookAPI, // 注册 CountBookAPI 组件
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI'; // 判断是否显示头部
    },
  },
};
</script>

<style scoped>
/* 您的样式代码 */
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.main-box {
  /* 其他样式 */
}
</style>
