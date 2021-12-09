<template lang="pug">
    svg.svg(
        :aria-hidden="ariaHidden"
        :focusable="focusable"
    )
        svg(
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :viewBox="viewBox"
        )
            slot
</template>

<script>
import {
    createStringPropConfig,
    truePropConfig, falsePropConfig,
} from '@/modules/propConfigs';

export default {
    props: {
        viewBox:
            createStringPropConfig(
                '0 0 16 16',
            ),
        ariaHidden: truePropConfig,
        focusable: falsePropConfig,
    },
};
</script>

<style lang="scss" scoped>
@import 'svg.scss';
</style>
