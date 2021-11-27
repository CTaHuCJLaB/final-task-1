<template lang="pug">
    p.internal-link
        nuxt-link.internal-link__core(
            :to="{ path, hash }"
        ) {{ title }}
</template>

<script>
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        path: createStringPropConfig(),
        hash: createStringPropConfig(),
        title: createStringPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'internal-link.scss';
</style>
