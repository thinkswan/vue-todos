<template>
  <div>
    <h1>404 Not Found</h1>
    <p>
      The page located at {{ this.$route.path }} does not exist.
      <router-link to="/">Back to home</router-link>
    </p>
  </div>
</template>
