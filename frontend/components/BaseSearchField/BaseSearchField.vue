<template lang="pug">
    base-field.field--search(
        v-bind="[$attrs]"
        type="search"
        name="search"
    )
</template>

<script>
export default {
    provide: {
        outerControlState: {
            description: 'Поиск по сайту',
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'field.scss';
</style>
