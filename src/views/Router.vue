<template>
    <div>
        <button type="button" class="btn btn-primary me-1" @click="getroute">getRoute</button>
        <button type="button" class="btn btn-primary me-1" @click="push">Push</button>
        <button type="button" class="btn btn-primary me-1" @click="replace">Replace</button>
        <button type="button" class="btn btn-primary me-1" @click="go">Go</button>
        <hr>
        <button type="button" class="btn btn-primary" @click="addRoute">新增路由</button>
    </div>
</template>

<script>
export default {
  methods: {
    push() {
      // 透過字串指定 URL
      this.$router.push('home');

      // 透過物件與path指定URL
      this.$router.push({ path: 'home' });

      // 與具名路由、params 搭配
      this.$router.push({ name: 'user', params: { userId: '123' } });

      // 以 query 指定目標的 query string
      this.$router.push({ path: 'register', query: { plan: 'private' } });

      // 搭配 hash, 執行後的結果為 /about#team
      this.$router.push({ path: '/about', hash: '#team' });
    },
    replace() {

    },
    go() {
      // 到下一頁 (或下一個路由紀錄)，等同 router.forward()
      this.$router.go(1);
      // 到前一頁 (或前一個路由紀錄)，等同 router.back()
      this.$router.go(-1);
    },
    getroute() {
      console.log(this.$route);
    },
    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'nweAbout',
        component: () => import('./About.vue'),
      });
    },
  },

};
</script>
