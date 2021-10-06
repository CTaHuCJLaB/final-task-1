<template lang="pug">
  base-field(
    class="field--search"
    type="search"
    name="search"
    v-bind="[$attrs]"
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
