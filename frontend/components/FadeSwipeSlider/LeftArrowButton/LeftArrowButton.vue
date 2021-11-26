<template lang="pug">
    crossed-out-button.button--arrow-left
</template>

<script>
import { reactive, provide } from '@nuxtjs/composition-api';
import CrossedOutButton from '../CrossedOutButton/CrossedOutButton';

export default {
    components: {
        CrossedOutButton,
    },
    setup() {
        const outerControlState = reactive({
            description: 'Перейти к предыдущему слайду',
        });
        provide(
            'outerControlState',
            outerControlState,
        );
    },
};
</script>

<style lang="scss" scoped>
@import 'button.scss';
</style>
