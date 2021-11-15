<template lang="pug">
    div
        nuxt
        main-nav-list
</template>

<script>
export default {
    async fetch() {
        await this.$store
            .dispatch('loadDefaultLayoutData');
    },
};
</script>

<style lang="scss">

</style>
