<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: white;
  background: #4c8ffb;
  border: 1px #3079ed solid;
  box-shadow: inset 0 1px 0 #80b0fb;
}

button:hover {
  border: 1px #2f5bb7 solid;
  box-shadow: 0 1px 1px #eaeaea, inset 0 1px 0 #5a94f1;
  background: #3f83f1;
}

button:active {
  box-shadow: inset 0 2px 5px #2370fe;
}
</style>
