<template>
  <div class="editor-main">
    <div class="box-editor-main">
      <div class="editor-section">
        <ImageEditor canvasId="frontCanvas" :text="frontText" :isFront="true" />
        <div class="box-field">
          <span>Write your text here / frontside</span>
          <input class="input-box" maxlength="15" v-model="frontText" />
        </div>
      </div>
      <div class="editor-section">
        <ImageEditor canvasId="backCanvas" :text="backText" :isFront="false" />
        <div class="box-field">
          <span>Write your text here / backside</span>
          <textarea class="input-box" v-model="backText" />
        </div>
      </div>
    </div>

    <router-link class="primary-button-link" to="/preview">Ok</router-link>
  </div>
</template>

<script>
import store from "../../core/store";
import ImageEditor from "../../shared/imageEditor/ImageEditor.vue";

export default {
  name: "Editor",
  components: {
    ImageEditor,
  },
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
    backText(val, prevVal) {
      var lines = val.split(/\n/g);

      if (lines.length < 4) {
        if (val.length === 30 && val.length > prevVal.length) {
          this.backText = val + "\n";
        }

        if (val.length === 61 && val.length > prevVal.length) {
          this.backText = val + "\n";
        }

        if (val.length > 92) {
          this.backText = prevVal;
        } else {
          store.setBackText(val);
        }
      } else {
        this.backText = prevVal;
      }
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/components/_buttons.scss";
@import "../../styles/abstracts/_mixins.scss";

@import "../../styles/components/_images.scss";
@import "../../styles/components/_inputs.scss";

.editor-main {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    @include push-top(8);
  }

  .box-editor-main {
    display: flex;
    flex-direction: column;

    .editor-section {
      display: flex;
      flex-direction: row;
      @include push-bottom(8);
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
}
</style>