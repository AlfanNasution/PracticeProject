<template>
  <the-header :title="'Admin Page'"></the-header>
  <course-form></course-form>
  <user-take></user-take>
  <the-footer :titleFooter="'Visit Us'"></the-footer>
</template>

<script>
import CourseForm from "./components/Course/CourseForm.vue";
import UserTake from "./components/Course/UserTake.vue";

export default {
  components: {
    CourseForm,
    UserTake,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
