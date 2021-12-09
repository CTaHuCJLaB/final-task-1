<template lang="pug">
    section.section.section--light(
        class="section--creativity"
        id="block_1"
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
                first-image(:image="firstImage")
            second-image(:image="secondImage")
            .section__grid
                p.p
                    | {{secondParagraph}}
                p.p.p--third
                    | {{thirdParagraph}}
                share-block(
                    :data-title="shareTitle"
                    :data-description="shareDescription"
                    :data-image="shareImage"
                    block-anchor="block_1"
                )
                internal-link.button--read-more(
                    :title="readMoreLinkTitle"
                    path="/creativity"
                )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('creativityBlock', [
            'h2', 'introParagraph',
            'firstParagraph', 'secondParagraph',
            'thirdParagraph', 'firstImage',
            'secondImage', 'shareTitle',
            'shareDescription', 'shareImage',
        ]),
        readMoreLinkTitle() {
            return this.$store.getters
                .readMoreToggleData.offCaption;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
