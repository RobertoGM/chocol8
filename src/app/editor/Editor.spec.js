import { shallowMount } from '@vue/test-utils';
import Editor from './Editor.vue';

jest.mock('../../core/store', () => ({
  state: {
    frontText: 'front',
    backText: 'back',
    setFrontText: jest.fn(),
    setBackText: jest.fn(),
  },
}));

describe('Editor page ', () => {
  it('initializes with the value of the store', () => {
    const wrapper = shallowMount(Editor);
    expect(wrapper.vm.frontText).toMatch('front');
    expect(wrapper.vm.backText).toMatch('back');
  });

  it('data should change on valid user input', () => {
    const wrapper = shallowMount(Editor);
    expect(wrapper.vm.frontText).toMatch('front');
    expect(wrapper.vm.backText).toMatch('back');

    const inputF = wrapper.find('#input-front');
    inputF.element.value = 'front2';
    inputF.trigger('input');
    expect(wrapper.vm.frontText).toMatch('front2');

    const inputB = wrapper.find('#input-back');
    inputB.element.value = 'back2';
    inputB.trigger('input');
    expect(wrapper.vm.backText).toMatch('back2');
  });

  it('inputs should only allow alphanumeric or line breaks', () => {
    const wrapper = shallowMount(Editor);
    expect(wrapper.vm.frontText).toMatch('front');
    expect(wrapper.vm.backText).toMatch('back');

    const inputF = wrapper.find('#input-front');
    inputF.element.value = 'front2??😋';
    inputF.trigger('input');
    expect(wrapper.vm.frontText).toMatch('front');

    const inputB = wrapper.find('#input-back');
    inputB.element.value = 'back2__😋';
    inputB.trigger('input');
    expect(wrapper.vm.backText).toMatch('back');
  });
});
