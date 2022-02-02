<template>
  <div class="box-editor-main">
    <ImageEditor :canvasId="canvasId" :text="value" :isFront="front" />
    <div class="box-field">
      <span>{{ title }}</span>
      <input
        class="input-box"
        :value="value"
        @keyup="$emit('onEditorChange', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import ImageEditor from "../../../shared/imageEditor/ImageEditor.vue";
export default {
  name: "BoxEditor",
  components: {
    ImageEditor,
  },
  props: {
    canvasId: String,
    title: String,
    value: String,
    front: Boolean,
  },
  emits: ["onEditorChange"],
};
</script>

<style lang="scss">
@import "../../../styles/abstracts/_mixins.scss";
@import "../../../styles/components/_images.scss";
@import "../../../styles/components/_inputs.scss";

.box-editor-main {
  display: flex;
  flex-direction: row;
  input {
    @include push-left(8);
  }
  .box-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      align-items: center;
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