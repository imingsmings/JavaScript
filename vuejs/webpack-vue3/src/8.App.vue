<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ getTitle() }}</p>
    <ul>
      <li v-for="teacher in teachers" :key="teacher.id">
        {{ teacher.name }}, {{ teacher.subject }}, {{ teacher.like }}
      </li>
    </ul>
    <button @click="changeTitle('a new title')">Click</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'This is a title',
      teachers: [],
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = title;
      this.getTeacherData();
    },
    getTitle() {
      return this.title;
    },
    getTeacherData() {
      fetch('http://127.0.0.1:9080/getTeachers')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.teachers = data;
        });
    },
  },
};
</script>

<style></style>
