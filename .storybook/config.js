import { configure, addParameters } from '@storybook/vue';
import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    theme: themes.dark
  },
});

function loadStories() {
  require('../src/stories/agency-rules.story');
}

configure(loadStories, module);