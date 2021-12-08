<template lang="pug">
    svg.svg(
        :aria-hidden="ariaHidden"
        :focusable="focusable"
    )
        <?xml version="1.0" standalone="no"?>
        doctype svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
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
