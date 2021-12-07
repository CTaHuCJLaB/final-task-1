<template lang="pug">
    dl.list.list--definition
        .list__item(
            v-for="({ year, description }, index)\
                in items\
            "
        )
            dt.list__year {{year}}
            dd.p {{description}}
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        items: createArrayPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'list.scss';
</style>
