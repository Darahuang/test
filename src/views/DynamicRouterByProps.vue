<template>
    <div>
   {{ id }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  created() {
    const seed = this.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
