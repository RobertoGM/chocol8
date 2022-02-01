<template>
  <div class="editor-main">
    <BoxEditor
      title="Write your text here / frontside"
      :value="frontText"
      @onEditorChange="setFrontText"
    />
    <span />
    <BoxEditor
      title="Write your text here / backside"
      :value="backText"
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
      store.setfrontText(val);
    },
    setBackText(val) {
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