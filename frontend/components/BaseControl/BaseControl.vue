<template lang="pug">
  span.base-control(
    :class="{\
      'is-visually-hidden':\
        !caption.text\
    }"
  )
    span.visually-hidden(
      v-if="description"
    )
      | {{description}}
    span(
      v-if="caption.text"
      :class="caption.classes"
      :aria-hidden="!!description"
    )
      | {{caption.text}}
</template>

<script>
import _ from 'lodash';
import {
    reactive, inject, toRefs,
    isReactive,
} from '@nuxtjs/composition-api';
import { falsePropConfig }
    from '@/modules/propConfigs';

export default {
    props: {
        isFocused: falsePropConfig,
    },
    setup() {
        const outerStateDefault = {
            description: '',
            caption: {
                text: '',
                classes: '',
            },
        };
        let outerControlState = inject(
            'outerControlState',
            outerStateDefault,
        );
        outerControlState = isReactive(
            outerControlState,
        )
            ? toRefs(outerControlState)
            : outerControlState;
        outerControlState = reactive(
            _.assign(
                outerStateDefault,
                outerControlState,
            ),
        );
        return toRefs(outerControlState);
    },
    watch: {
        isFocused(newValue, oldValue) {
            if (!oldValue && newValue) {
                this.focus();
            }
        },
    },
    methods: {
        focus() {
            this.$parent
                .$refs.core.focus();
        },
    },
};
</script>
