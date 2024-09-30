<template>
    <div id="app">
      <!-- 6.1 标题 -->
      <h1>Book Counter</h1>
      
      <!-- 6.2 按钮 -->
      <button @click="getBookCount">Get Book Count</button>
      
      <!-- 6.3 v-if 逻辑判断 -->
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // 6.4 导入 axios 包
  
  export default {
    data() {
      return {
        count: null,  // 用于存储获取到的图书数量
        error: null   // 用于存储可能的错误信息
      };
    },
    methods: {
      async getBookCount() {
        try {
          // 6.5 使用 await axios 获取 URL
          const response = await axios.get('https://countbooks-cjzawkigwq-uc.a.run.app');
          this.count = response.data.count;  // 成功获取图书数量
          this.error = null;  // 清除错误信息
        } catch (error) {
          console.error('Error fetching book count:', error);  // 打印错误信息
          this.error = 'Error fetching book count. Please try again.';  // 显示用户友好的错误信息
          this.count = null;  // 在发生错误时清除 count
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 添加一些简单的样式 */
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    font-size: 16px;
  }
  </style>
  