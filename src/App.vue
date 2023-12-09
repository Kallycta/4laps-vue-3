<template>
  <div class="container_elem">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.container_elem {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: auto;
}
</style>
