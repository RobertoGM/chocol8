<template>
  <div class="home-main">
    <ImageEditor canvasId="home" :text="'your own text!'" :isFront="true" />
    <div>
      <span
        >Hello Developer-to-be! Let's make some customised chocolate bar
        covers.</span
      >
      <router-link class="primary-button-link" to="/editor">Start</router-link>
    </div>
  </div>
</template>

<script>
import ImageEditor from "@/shared/imageEditor/ImageEditor";
export default {
  name: "Home",
  components: { ImageEditor },
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
