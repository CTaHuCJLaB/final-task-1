<template lang="pug">
    div
        nuxt
        main-nav-list
</template>

<script>
export default {
    async fetch() {
        await this.$store
            .dispatch('defaultLayoutDataLoading');
    },
};
</script>

<style lang="scss" scoped>

</style>
