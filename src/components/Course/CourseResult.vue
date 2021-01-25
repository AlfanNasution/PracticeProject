<template>
  <tbody>
    <tr>
      <td>{{ id }}</td>
      <td>{{ name }}</td>
      <td>{{ kampus }}</td>
      <td>{{ take }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["id", "name", "kampus", "take"],
};
</script>

<style scoped>
h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
