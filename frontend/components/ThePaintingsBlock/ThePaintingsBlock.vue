<template lang="pug">
    section.section.section--paintings(
        id="block_2"
    )
        .section__content
            h2.visually-hidden {{h2}}
            fade-swipe-slider(
                :slidePreviews="slidePreviews"
                :slides="slides"
                :preview-title-prefix="previewTitlePrefix"
                :slide-title-prefix="paintingTitlePrefix"
            )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'paintingTitlePrefix',
        ]),
        ...mapGetters('paintingsBlock', [
            'h2',
            'previewTitlePrefix',
            'slidePreviews',
            'slides',
        ]),
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
