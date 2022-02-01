<template>
  <div class="home-main">
    <!-- img to be replaced with the default preview -->
    <img src="@/assets/dev_choc-barWithTextPREVIEW-01.png" />
    <div>
      <span
        >Hello Developer-to-be! Let's make some customised chocolate bar
        covers.</span
      >
      <!-- <button>start</button> -->
      <router-link class="primary-button-link" to="/editor">Start</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "@/styles/components/_images.scss";
@import "@/styles/components/_labels.scss";
@import "@/styles/components/_buttons.scss";

.home-main {
  display: flex;
  flex-direction: row;

  img {
    @extend .preview_size;
    @include push-right(8);
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      @extend .common-label;
      @include push-bottom(6);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      @include push-right(0);
      @include push-bottom();
    }
  }
}
</style>
