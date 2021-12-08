<template lang="pug">
    ul.list.list--nav
        li.list__item(
            v-for="(navTitle, index) in navTitles"
            :key="index"
        )
            internal-link(
                path="/"
                :hash="`block_${index}`"
                :title="`${navTitle}`"
            )
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        navTitles: createArrayPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'list.scss';
</style>
