<template lang="pug">
    arrow-button.button--arrow-right(
        v-bind="$attrs"
    )
</template>

<script>
import ArrowButton from '../ArrowButton/ArrowButton';

export default {
    components: {
        ArrowButton,
    },
    provide: {
        outerControlState: {
            description: 'Перейти к следующему слайду',
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'button.scss';
</style>
