<template>
  <div>PREVIEW PAGE</div>
  <span>The front text preview is: {{ frontText }}</span>
  --
  <span>The back text preview is: {{ backText }}</span>
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
