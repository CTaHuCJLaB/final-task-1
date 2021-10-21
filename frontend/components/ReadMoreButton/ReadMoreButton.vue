<template lang="pug">
  base-button.button--read-more
    template(#description)
</template>

<script>
import {
    reactive, provide,
} from '@nuxtjs/composition-api';

export default {
    setup(props) {
        const outerControlState = reactive({
            caption: {
                text: 'читать больше',
            },
        });
        provide(
            'outerControlState',
            outerControlState,
        );
    },
};
</script>
