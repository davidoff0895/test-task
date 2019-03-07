import { storiesOf } from '@storybook/vue';
import agencies from './__data/agencies';
import rules from './__data/rules';
import agencyRules from './agency-rules'

storiesOf('Agency rules', module).add('view', () => ({
  components: { agencyRules },
  template:
    `<div style="color: #ffffff;">
        <agency-rules
          :agencies="agencies"
          :rules="rules"/>
     </div>`,
  data() {
    return {
      agencies,
      rules
    }
  },
  methods: {

  }
}));
