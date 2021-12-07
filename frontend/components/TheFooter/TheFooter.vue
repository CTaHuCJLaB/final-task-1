<template lang="pug">
    footer.footer
        .footer__content
            main-nav-list
            share-block(
                :data-title="shareTitle"
                :data-description="shareDescription"
                :data-image="shareImage"
            )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('footer', [
            'shareTitle',
            'shareDescription',
            'shareImage',
        ]),
    },
};
</script>

<style lang="scss" scoped>
@import 'footer.scss';
</style>
