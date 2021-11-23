<template lang="pug">
  p.field
    label.field__label
      base-control(
        :is-focused="isFocused"
      )
      .field__screed
        slot(name="icon")
        input.field__core(
          ref="core"
          v-bind="$attrs"
          :type="type"
        )
</template>

<script>
import { inject, toRefs } from '@nuxtjs/composition-api';
import createTypeProp from '@/mixins/createTypeProp';

export default {
    mixins: [createTypeProp('text')],
    inheritAttrs: false,
    setup() {
        const outerFieldState = inject(
            'outerFieldState',
            { isFocused: false },
        );
        return toRefs(outerFieldState);
    },
};
</script>

<style lang="scss" scoped>
@import 'field.scss';
</style>
