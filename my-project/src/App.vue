<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style>
body {
  background-color: #fbefe4;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
input {
  border: none;
  background-color: transparent;
}
input:focus {
  outline: none;
  background-color: transparent;
}
a {
  text-decoration: none;
}

li a {
  text-decoration: none;
}
</style>
