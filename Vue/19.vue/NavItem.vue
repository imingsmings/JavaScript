<template>
  <li>
    <a :href="navItem.link">{{ navItem.title }}</a>
  </li>
</template>

<script>
export default {
  props: ['navItem'],
};
</script>

<style></style>
