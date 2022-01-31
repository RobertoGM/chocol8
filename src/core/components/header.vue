<template>
  <div class="header">
    <!-- <router-link to="/preview">Preview</router-link> -->
    <h1 class="title"><span>Package</span>Media</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../../styles/abstracts/_variables.scss";
@import "../../styles/abstracts/_mixins.scss";
@import "../../styles/base/_typography.scss";

.header {
  text-align: center;
  height: $app-header-height;
  background-color: $white;
}

.title {
  color: $theme-primary;
  margin: 0;
  @include pad-top(5);
  @include pad-bottom(5);
  span {
    @extend .font-bold;
  }
}
</style>