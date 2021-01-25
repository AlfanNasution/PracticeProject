<template>
  <tbody>
    <tr>
      <td>{{ id }}</td>
      <td>{{ name }}</td>
      <td>{{ kampus }}</td>
      <td>{{ take }}</td>
      <td>
        <base-button @click="$emit('delete', id)">Delete</base-button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["id", "name", "kampus", "take"],
  emits: ["delete"],
};
</script>

<style scoped>
h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
