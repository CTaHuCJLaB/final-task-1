<template lang="pug">
    arrow-button.button--arrow-left(
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
            description: 'Перейти к предыдущему слайду',
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'button.scss';
</style>
