<template lang="pug">
    section.section.section--light(
        id="block_1"
        :class="'section--creativity'"
    )
        .section__content
            .section__intro
                h2.h2 {{h2}}
                p.section__intro-paragraph
                    | {{introParagraph}}
            hr.section__hr
            .section__columns
                p.p
                    | {{firstParagraph}}
                first-image(
                    :image="firstImage"
                )
            //- second-image
            .section__grid
                p.p
                share-block(
                    block-anchor="block_1"
                    :data-title="shareTitle"
                    :data-description="shareDescription"
                    :data-image="shareImage"
                )
                read-more-link(
                )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            h2: 'creativityH2',
            introParagraph: 'introParagraph',
            firstParagraph: 'firstParagraph',
            secondParagraph: 'secondParagraph',
            thirdParagraph: 'thirdParagraph',
            firstImage: 'firstImage',
            secondImage: 'secondImage',
            shareTitle: 'creativityShareTitle',
            shareDescription: 'creativityShareDescription',
            shareImage: 'creativityShareImage',
        }),
    },
    mounted() {
        console.log(this.firstImage);
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
