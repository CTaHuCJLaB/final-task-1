<template lang="pug">
    .page
        the-index-header
        the-index-main
</template>

<script>
export default {
    async asyncData({ store }) {
        await store.dispatch('loadHomePageData');
    },
};
</script>
