<template>
  <div class="nav">
    <div class="logo"><a>Home</a></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  background-color: #ff9f74;
  width: 100%;
  height: 40px;
  padding: 0px 0px 10px 0px;
  display: inline-flex;
}

.nav .logo {
  position: absolute;
  left: 45%;
  top: 7px;
  text-decoration: none;
  font-family: "Nerko One", cursive;
}

.nav .logo a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
</style>
