<template lang="pug">
    dl.list.list--life-events
        .list__item(
            v-for="({ year, description }, index)\
                in lifeEvents\
            "
        )
            dt.list__year {{year}}
            dd.p {{description}}
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        lifeEvents: createArrayPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'list.scss';
</style>
