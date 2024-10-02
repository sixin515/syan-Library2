<template>
    <div id="app">
      <h1>Book Counter</h1>
      <button @click="getBookCountAPI">Get Book Count</button>
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
      
      <!-- 显示 jsondata 的内容 -->
      <pre>{{ jsondata }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // 导入 axios 包
  
  export default {
    data() {
      return {
        count: null, // 用于存储获取到的图书数量
        error: null, // 用于存储可能的错误信息
        jsondata: null // 用于存储返回的 JSON 数据
      };
    },
    mounted() {
      this.getBookCountAPI(); // 组件挂载后调用 getBookCountAPI 方法
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get('https://countbooks-cjzawkigwq-uc.a.run.app');
          this.jsondata = response.data; // 存储返回的 JSON 数据
          this.error = null; // 清除错误信息
          this.count = this.jsondata.count; // 从 JSON 数据中提取图书数量
        } catch (error) {
          console.error('Error fetching book count:', error); // 打印错误信息
          this.error = 'Error fetching book count. Please try again.'; // 显示用户友好的错误信息
          this.count = null; // 在发生错误时清除 count
        }
      }
    }
  };
  </script>
  
  <style scoped>
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
  