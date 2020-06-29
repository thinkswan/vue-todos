<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";

export default {
  name: "App",
  components: { Header },
  watch: {
    $route: {
      handler: to => {
        document.title = `${to.meta.pageTitle} | vue-todos`;
      },
      immediate: true
    }
  }
};
</script>
