<template>
  <my-header :nav-data="navData" />
  <button-counter />
</template>

<script>
import MyHeader from './MyHeader.vue';
export default {
  components: {
    MyHeader,
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: 'Baidu',
          link: 'https://www.baidu.com',
        },
        {
          id: 2,
          title: 'Google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
};
</script>

<style></style>
