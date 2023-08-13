<template>
  <div class="mobile-login">
    <p class="text">
      <input
        type="text"
        name="phone"
        placeholder="请输入手机号"
        v-model="accountName"
      />
    </p>
    <p class="code">
      <input
        type="text"
        name="qrcode"
        placeholder="请输入验证码"
        v-model="qrcode"
      />
      <button>Send</button>
    </p>
    <p class="btn"><button>Login</button></p>
  </div>
</template>

<script>
export default {
  name: 'AccountLogin',
  data() {
    return {
      accountName: '',
      qrcode: '',
    };
  },
  mounted() {
    console.log('Mobile mounted');
  },
  unmounted() {
    console.log('Mobile unmounted');
  },
  activated() {
    console.log('Mobile activated');
  },
  deactivated() {
    console.log('Mobile deactivated');
  },
};
</script>

<style lang="scss" scoped>
.mobile-login {
  p {
    margin: 0;
    input,
    button {
      outline: none;
      line-height: 30px;
      box-sizing: border-box;
    }
  }
  .code {
    display: flex;
    input {
      flex: 4;
    }
    button {
      flex: 1;
    }
    margin-bottom: 5px;
  }
  .text {
    input {
      width: 100%;
      line-height: 30px;
    }
    margin-bottom: 5px;
  }
  .btn {
    button {
      width: 100%;
    }
  }
}
</style>
