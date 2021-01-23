<template>
  <ul>
    <h3></h3>
    <h3>{{ name }}</h3>
    <h3>{{ kampus }}</h3>
    <h3>{{take}}</h3>
  </ul>
</template>

<script>
export default {
  props: ["name", "kampus", "take"],
};
</script>

<style scoped>
h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
