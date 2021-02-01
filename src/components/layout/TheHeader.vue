<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  top: 0;
  width: 100%;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
