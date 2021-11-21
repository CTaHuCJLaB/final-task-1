import { createStringPropConfig }
  from '@/modules/propConfigs';

export default (defaultValue) => ({
  props: {
    type:
      createStringPropConfig(
        defaultValue,
      ),
  },
});
