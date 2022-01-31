<template>
  <div>EDITOR PAGE</div>
  <input :value="frontText" @keyup="setFrontText" />
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
