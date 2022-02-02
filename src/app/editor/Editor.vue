<template>
  <div class="editor-main">
    <BoxEditor
      canvasId="front"
      title="Write your text here / frontside"
      :value="frontText"
      :front="true"
      @onEditorChange="setFrontText"
    />
    <span />
    <BoxEditor
      canvasId="back"
      title="Write your text here / backside"
      :value="backText"
      :front="false"
      @onEditorChange="setBackText"
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
  methods: {
    setFrontText(val) {
      this.frontText = val;
      store.setFrontText(val);
    },
    setBackText(val) {
      console.log(val.split(/\n/g))
      this.backText = val;
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