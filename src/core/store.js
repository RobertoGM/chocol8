import { reactive } from 'vue';

export default {
  state: reactive({
    frontText: '',
    backText: '',
  }),

  setFrontText(newValue) {
    this.state.frontText = newValue;
  },

  setBackText(newValue) {
    this.state.backText = newValue;
  },
};
