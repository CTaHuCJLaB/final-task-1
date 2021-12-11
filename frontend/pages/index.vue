<template lang="pug">
    .page
        the-index-header
        the-index-main
</template>

<script>
import $ from 'jquery';

export default {
    async asyncData({ store }) {
        await store.dispatch('homePageDataLoading');
    },
    mounted() {
        // скрипт подключается здесь, а не в nuxt.config.js для того,
        // чтобы при переходе с другого лэйаута в режиме no-lazy loading
        // блок "Поделиться" также загружался
        $('script[src=\'https://yastatic.net/share2/share.js\']')
            .remove();
        $('<script>', {
            src: 'https://yastatic.net/share2/share.js',
        }).appendTo('head');
    },
};
</script>
