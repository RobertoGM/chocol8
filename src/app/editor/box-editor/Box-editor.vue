<template>
  <div class="box-editor-main">
    <!-- img to be replaced with the actual editor -->
    <img
      class="preview_size"
      src="@/assets/dev_choc-barWithTextPREVIEW-01.png"
    />
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
export default {
  name: "BoxEditor",
  props: {
    title: String,
    value: String,
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
  img {
    @include push-right(8);
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