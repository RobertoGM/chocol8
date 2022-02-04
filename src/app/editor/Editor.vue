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

let regex = new RegExp(/^[a-z0-9\r\n]*$/i);

String.prototype.splice = function (offset, text, removeCount = 0) {
  let calculatedOffset = offset < 0 ? this.length + offset : offset;
  return (
    this.substring(0, calculatedOffset) +
    text +
    this.substring(calculatedOffset + removeCount)
  );
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
      var lines = val.split(/\n/g);
      let charLimit = 30;
      if (lines.length < 4 && regex.test(val)) {
        if (val.length > prevVal.length) {
          lines.forEach((l, i) => {
            if (val.length === charLimit * (i + 1) + i) {
              this.backText = val + "\n";
            }
          });
        }

        if (val.length > charLimit * 3 + 2) {
          this.backText = prevVal;
        } else {
          store.setBackText(val);
        }
      } else {
        this.backText = prevVal;
      }

      // let maxLength = 20;
      // var lines = val.split("\n");

      // for (var i = 0; i < lines.length; i++) {
      //   if (lines[i].length > maxLength) {
      //     lines[i] = lines[i].substring(0, maxLength);
      //     if (lines[i + 1]) {
      //       lines[i + 1].splice(0, lines[i].substring(maxLength - 1));
      //     } else {
      //       lines[i + 1] = lines[i].substring(maxLength);
      //     }
      //   }
      // }

      // if (lines.length < 4) {
      //   let newVal = lines.join("\n");
      //   this.backText = newVal;
      //   store.setBackText(newVal);
      // } else {
      //   this.backText = prevVal;
      // }
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