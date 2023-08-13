<template>
  <div class="login-container">
    <ul class="tab" @click="changeTab">
      <li
        v-for="(item, index) of tabs"
        :key="index"
        :data-key="index"
        :class="['tab-item', { active: currentTab === index }]"
      >
        {{ item }}
      </li>
    </ul>
    <div class="content">
      <keep-alive :max="3" :exclude="['AccountLogin']">
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AccountLogin from './components/AccountLogin.vue';
import MobileLogin from './components/MobileLogin.vue';
import QrcodeLogin from './components/QrcodeLogin.vue';

export default {
  name: 'MainLogin',
  components: {
    AccountLogin,
    MobileLogin,
    QrcodeLogin,
  },
  data() {
    return {
      currentTab: 0,
      tabs: ['账号密码', '手机号', '二维码'],
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentTab) {
        case 0:
          return AccountLogin;
        case 1:
          return MobileLogin;
        case 2:
          return QrcodeLogin;
        default:
          return AccountLogin;
      }
    },
  },
  methods: {
    changeTab(e) {
      const target = e.target || e.srcElement;
      this.currentTab = Number(target.dataset.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 400px;
  margin: 50px auto;
  .tab {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    background: #f3f3f3;
    cursor: pointer;
    .tab-item {
      flex: 1;
      &.active {
        background-color: #2c2a2a;
        color: #fff;
      }
    }
  }
  .content {
    padding: 10px;
    text-align: center;
  }
}
</style>
