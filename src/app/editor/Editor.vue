<template>
  <div class="editor-main">
    <BoxEditor
      canvasId="front"
      title="Write your text here / frontside"
      :front="true"
      :value="frontText"
      @textUpdated="frontText = $event"
    />
    <span />
    <BoxEditor
      canvasId="back"
      title="Write your text here / backside"
      :front="false"
      :value="backText"
      @textUpdated="backText = $event"
    />
    <router-link class="primary-button-link" to="/preview">Ok</router-link>
  </div>
</template>

<script>
import store from "../../core/store";
import BoxEditor from "./box-editor/Box-editor.vue";

export default {
  name: "Editor",
  components: { BoxEditor },
  data() {
    return {
      frontText: store.state.frontText,
      backText: store.state.backText,
    };
  },
  watch: {
    frontText(val) {
      store.setFrontText(val);
    },
    backText(val) {
      // console.log(val.split(/\n/g));
      // console.log(val.length);
      store.setBackText(val);
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/components/_buttons.scss";
@import "../../styles/abstracts/_mixins.scss";
.editor-main {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    @include push-top(8);
  }

  .primary-button-link {
    @include push-top();
  }
}
</style>