<template lang="pug">
    crossed-out-button.button--arrow-left(
        v-bind="$attrs"
    )
</template>

<script>
import CrossedOutButton from '../CrossedOutButton/CrossedOutButton';

export default {
    components: {
        CrossedOutButton,
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
