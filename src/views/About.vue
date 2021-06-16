<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Card></Card>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>
