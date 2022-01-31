import { reactive } from 'vue';

export default {
  state: reactive({
    frontText: 'f',
    backText: 'b',
  }),

  setfrontText(newValue) {
    this.state.frontText = newValue;
  },

  setBackText(newValue) {
    this.state.backText = newValue;
  },
};
