<template>
  <div class="account-login">
    <p class="text">
      <input type="text" placeholder="请输入账号" v-model="username" />
    </p>
    <p class="text">
      <input type="password" placeholder="请输入密码" v-model="password" />
    </p>
    <p class="btn"><button>Login</button></p>
  </div>
</template>

<script>
export default {
  name: 'AccountLogin',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    console.log('Account mounted');
  },
  unmounted() {
    console.log('Account unmounted');
  },
  activated() {
    console.log('Account activated');
  },
  deactivated() {
    console.log('Account deactivated');
  },
};
</script>

<style lang="scss" scoped>
.account-login {
  p {
    margin: 0;
    input,
    button {
      width: 100%;
      box-sizing: border-box;
      line-height: 30px;
      outline: none;
    }
  }
  .text {
    margin-bottom: 5px;
  }
}
</style>
