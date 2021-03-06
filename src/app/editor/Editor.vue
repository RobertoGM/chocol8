<template>
  <div class="editor-main">
    <div class="box-editor-main">
      <div class="editor-section">
        <ImageEditor canvasId="frontCanvas" :text="frontText" :isFront="true" />
        <div class="box-field">
          <span>Write your text here / frontside</span>
          <input
            id="input-front"
            class="input-box"
            maxlength="15"
            v-model="frontText"
          />
        </div>
      </div>
      <div class="editor-section">
        <ImageEditor canvasId="backCanvas" :text="backText" :isFront="false" />
        <div class="box-field">
          <span>Write your text here / backside</span>
          <textarea id="input-back" class="input-box" v-model="backText" />
        </div>
      </div>
    </div>

    <router-link class="primary-button-link" to="/preview">Ok</router-link>
  </div>
</template>

<script>
import store from "../../core/store";
import ImageEditor from "../../shared/imageEditor/ImageEditor.vue";
import { splitLines } from "../../shared/utils";

let regex = new RegExp(/^[a-z0-9\r\n]*$/i);

String.prototype.insertString = function (index, text) {
  return this.substring(0, index) + text + this.substring(index);
};

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
    frontText(val, prevVal) {
      if (regex.test(val)) {
        store.setFrontText(val);
      } else {
        this.frontText = prevVal;
      }
    },
    backText(val, prevVal) {
      let newVal = splitLines(val, prevVal, 30, 3);
      this.backText = newVal;
      store.setBackText(newVal);
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

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        img {
          @include push-right(0);
          @include push-bottom();
        }
      }

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

    // Grow 10% on hover
    .editor-section:hover {
      .preview_size {
        width: 465px;
        height: 181px;

        @media only screen and (max-width: 400px) {
          // Ratio of 0.75 for smallest phones
          width: 317px;
          height: 123px;
        }
      }
    }
  }
}
</style>