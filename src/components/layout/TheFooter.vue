<template>
  <div class="footer">
    <h1>{{ titleFooter }}</h1>
  </div>
</template>

<script>
export default {
  props: ["titleFooter"],
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  bottom: 0%;
  width: 100%;
  height: 8%;
  background-color:brown;
  justify-content: center;
  text-underline-position: auto;
  color: white;
}
</style>
