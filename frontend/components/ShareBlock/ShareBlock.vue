<template lang="pug">
    .ya-share2(
        :data-services="shareServices"
        :data-url="`${appURL}/#${blockAnchor}`"
        ref="share"
        data-bare
        data-curtain
    )
</template>

<script>
import { mapGetters } from 'vuex';
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        blockAnchor: createStringPropConfig(),
    },
    computed: {
        ...mapGetters([
            'shareServices',
        ]),
        appURL() {
            return process.env.appURL;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'ya-share2.scss';
</style>
