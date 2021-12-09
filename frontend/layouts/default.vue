<template lang="pug">
    div
        nuxt
        the-footer
</template>

<script>
export default {
    async fetch() {
        await this.$store
            .dispatch('defaultLayoutDataLoading');
    },
};
</script>
