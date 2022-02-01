<template>
  <div class="preview-main">
    <div>
      <img
        class="preview_size"
        src="@/assets/dev_choc-barWithTextPREVIEW-01.png"
      />
      {{ frontText }}
      <img
        class="preview_size"
        src="@/assets/dev_choc-barWithTextPREVIEW-01.png"
      />
      {{ backText }}
    </div>
    <div>
      <span class="common-label">Thanks! We are ready now :)</span>
      <router-link class="primary-button-link" to="/editor">Done</router-link>
    </div>
  </div>
</template>

<script>
import store from "../../core/store";
export default {
  name: "Preview",
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
  }
  .primary-button-link {
    @include push-top(20);
  }
}
</style>
