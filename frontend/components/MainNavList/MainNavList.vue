<template lang="pug">
    base-nav-list(:navTitles="navTitles")
</template>

<script>

export default {
    computed: {
        navTitles() {
            return this.$store.getters
                .navTitles;
        },
    },
};
</script>
