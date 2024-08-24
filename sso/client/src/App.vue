<template>
<div v-if="!isLogin">
  <p>
    用户名：<input type="text" v-model="username" placeholder="用户名" />
  </p>
  <p>
    密码：<input type="password" v-model="password" placeholder="密码" />
  </p>
  <p>
    <button @click="login">登录</button>
  </p>
</div>  
<div v-if="isLogin">
  <button @click="loadCustomerInfo">加载客户信息</button>
  <h1>客户信息</h1>
  <div v-if="customerInfo">
    <p>客户ID：{{ customerInfo.id }}</p>
    <p>客户姓名：{{ customerInfo.name }}</p>
    <p>客户年龄：{{ customerInfo.age }}</p>
  </div>
  <div v-else>
    <span>没有获取客户数据</span>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const isLogin = ref(false);
const username = ref('');
const password = ref('');
const customerInfo = ref(null);

onMounted(() => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    isLogin.value = true;
  }
})

const login = async () => {
  if (username.value.length < 5) {
    alert('用户名至少5位');
    return;
  }

  if (password.value.length < 5) {
    alert('密码至少5位');
    return;
  }

  const { data } = await axios.post("http://localhost:8800/auth/login", {
    username: username.value,
    password: password.value
  });

  if (data.code === 0) {
    const { access_token, refresh_token } = data.data;

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    isLogin.value = true;
  }
}

const loadCustomerInfo = async () => {
  const { data } = await axios({
    url: "http://localhost:8100/api/customer",
    method: 'post',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('access_token')
    },
    data: {
      userId: 1
    }
  });

  if (data.code === 0) {
    customerInfo.value = data.data;
    return;
  }

  if (data.code === 2) {
    refreshToken((data) => {
      if (data.code === 2) {
        isLogin.value = false;
        return;
      }

      const { access_token, refresh_token } = data.data;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      loadCustomerInfo();
    });
  }
}

async function refreshToken (callback) {
  const { data } = await axios({
    url: "http://localhost:8800/auth/refresh",
    method: 'post',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('refresh_token')
    }
  });

  callback(data);
}
</script>

<style scoped>

</style>
