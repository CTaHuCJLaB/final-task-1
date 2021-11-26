<template lang="pug">
    crossed-out-button.button--arrow-right
</template>

<script>
import CrossedOutButton from '../CrossedOutButton/CrossedOutButton';

export default {
    components: {
        CrossedOutButton,
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
