<template>
  <my-logo />
  <my-nav :nav-data="navData" />
  <my-user />
</template>

<script>
import MyLogo from './MyLogo.vue';
import MyNav from './MyNav.vue';
import MyUser from './MyUser.vue';
export default {
  props: ['navData'],
  components: {
    MyLogo,
    MyNav,
    MyUser,
  },
};
</script>

<style></style>
