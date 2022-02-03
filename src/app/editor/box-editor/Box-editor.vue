<template>
  <div class="box-editor-main">
    <ImageEditor :canvasId="canvasId" :text="textValue" :isFront="front" />
    <div class="box-field">
      <span>{{ title }}</span>

      <input
        v-if="front"
        class="input-box"
        maxlength="15"
        :value="textValue"
        @input="changeEvent"
      />

      <textarea
        class="input-box"
        v-else
        rows="3"
        :value="textValue"
        @input="changeEvent"
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
  emits: ["textUpdated"],

  data() {
    return { textValue: this.value };
  },
  methods: {
    changeEvent(e) {
      this.$emit("textUpdated", e.target.value);
    },
  },
  watch: {
    value(newVal) {
      this.textValue = newVal;
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/abstracts/_mixins.scss";
@import "../../../styles/components/_images.scss";
@import "../../../styles/components/_inputs.scss";

.box-editor-main {
  display: flex;
  flex-direction: row;
  input,
  textarea {
    @include push-left(8);
    @media only screen and (max-width: 425px) {
      @include push-left(0);
    }
  }
  textarea {
    resize: none;
    height: 100px;
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