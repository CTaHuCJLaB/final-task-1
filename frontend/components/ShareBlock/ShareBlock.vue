<template lang="pug">
    .ya-share2(
        :data-services="shareServices"
        :data-url="`${appURL}/#${blockAnchor}`"
        id="share"
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
    mounted() {
        // скрипт подключается здесь, а не в nuxt.config.js для того,
        // чтобы при переходе с другого лэйаута в режиме no-lazy loading
        // блок "Поделиться" также загружался
        const yaShareScript = document.createElement('script');
        yaShareScript.setAttribute(
            'src', 'https://yastatic.net/share2/share.js',
        );
        document.head.appendChild(yaShareScript);
    },
};
</script>

<style lang="scss" scoped>
@import 'ya-share2.scss';
</style>
