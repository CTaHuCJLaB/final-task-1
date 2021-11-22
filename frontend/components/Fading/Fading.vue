<template lang="pug">
    transition(
        :tag="tag"
        name="fade"
        :mode="mode"
    )
        slot
</template>

<script>
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        tag: createStringPropConfig('div'),
        mode: createStringPropConfig('in-out'),
    },
};
</script>

<style lang="scss" scoped>
@import 'fading.scss';
</style>
