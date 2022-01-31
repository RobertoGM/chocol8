<template>
  <Header />
  <div class="main-body ">
    <router-view />
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
@import "../../styles/base/_typography.scss";
@import "../../styles/base/_base.scss";
@import "../../styles/abstracts/_variables.scss";
@import "../../styles/abstracts/_mixins.scss";

#app {
  @extend .main-font;
}

.main-body {
  @include pad();
  @extend .base-layout;
  background: rgba(255, 255, 255, 0.79);
}
</style>
