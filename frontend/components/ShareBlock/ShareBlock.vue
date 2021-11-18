<template lang="pug">
    .ya-share2(
        ref="share"
        data-bare
        data-curtain
        :data-services="shareServices"
        :data-url="`${appURL}/#${blockAnchor}`"
    )
</template>

<script>
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        blockAnchor: createStringPropConfig(),
    },
    computed: {
        shareServices() {
            return this.$store
                .getters.shareServices;
        },
        appURL() {
            return process.env.appURL;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'ya-share2.scss';
</style>
