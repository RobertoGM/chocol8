<template>
  <div class="preview-main">
    <div>
      <ImageEditor canvasId="front-preview" :text="frontText" :isFront="true" />
      <span />

      <ImageEditor canvasId="back-preview" :text="backText" :isFront="false" />
    </div>
    <div>
      <span class="common-label">Thanks! We are ready now :)</span>
      <router-link class="primary-button-link" to="/editor">Done</router-link>
    </div>
  </div>
</template>

<script>
import store from "../../core/store";
import ImageEditor from "../../shared/imageEditor/ImageEditor.vue";
export default {
  name: "Preview",
  components: {
    ImageEditor,
  },
  data() {
    return {
      frontText: store.state.frontText,
      backText: store.state.backText,
    };
  },
};
</script>
<style lang="scss">
@import "../../styles/abstracts/_mixins.scss";
@import "../../styles/components/_images.scss";
@import "../../styles/components/_labels.scss";

.preview-main {
  display: flex;
  flex-direction: row;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    & > span {
      @include push-top(8);
    }
  }
  .primary-button-link {
    @include push-top(20);
  }
}
</style>
