<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    {{ name}}
  </div>
  <router-view/>

  <button type="button" class="btn btn-primary">primary</button>
</template>

<style lang="scss">
@import "bootstrap"
</style>

<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_APIPATH,
    };
  },
};
</script>
