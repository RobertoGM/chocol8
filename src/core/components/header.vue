<template>
  <div class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/editor">Editor</router-link> |
    <router-link to="/preview">Preview</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
  @import "../../styles/abstracts/_variables.scss";
  .header {
    height: $app-header-height;
    background-color: $white;
  }
</style>