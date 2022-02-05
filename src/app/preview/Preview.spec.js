import { shallowMount } from '@vue/test-utils';
import Preview from './Preview.vue';

jest.mock('../../core/store', () => ({
  state: {
    frontText: 'front',
    backText: 'back',
    setFrontText: jest.fn(),
    setBackText: jest.fn(),
  },
}));

describe('Preview page ', () => {
  it('initializes with the value of the store', () => {
    const wrapper = shallowMount(Preview);
    expect(wrapper.vm.frontText).toMatch('front');
    expect(wrapper.vm.backText).toMatch('back');
  });
});
