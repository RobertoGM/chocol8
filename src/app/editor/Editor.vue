<template>
  <div>Open Sans</div>
  <!-- img to be replaced with the actual editor -->
  <img
    class="preview_size"
    src="../../assets/dev_choc-barWithTextPREVIEW-01.png"
  />
  <input :value="frontText" @keyup="setFrontText" />

  <!-- img to be replaced with the actual editor -->
  <img
    class="preview_size"
    src="../../assets/dev_choc-barWithTextPREVIEW-02.png"
  />
  <input :value="backText" @keyup="setBackText" />
</template>

<script>
import store from "../../core/store";

export default {
  name: "Editor",
  data() {
    return {
      frontText: store.state.frontText,
      backText: store.state.backText,
    };
  },
  methods: {
    setFrontText(ev) {
      store.setfrontText(ev.target.value);
    },
    setBackText(ev) {
      store.setBackText(ev.target.value);
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/components/_images.scss";
</style>