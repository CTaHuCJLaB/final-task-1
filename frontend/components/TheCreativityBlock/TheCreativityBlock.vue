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
                first-image(:image="firstImage")
            second-image(:image="secondImage")
            .section__grid
                p.p
                    | {{secondParagraph}}
                p.p
                    | {{thirdParagraph}}
                share-block(
                    block-anchor="block_1"
                    :data-title="shareTitle"
                    :data-description="shareDescription"
                    :data-image="shareImage"
                )
                internal-link.button--read-more(
                    path="/creativity"
                    :title="readMoreLinkTitle"
                )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            h2: 'creativityH2',
            shareTitle: 'creativityShareTitle',
            shareDescription:
                'creativityShareDescription',
            shareImage: 'creativityShareImage',
        }),
        ...mapGetters([
            'introParagraph',
            'firstParagraph',
            'secondParagraph',
            'thirdParagraph',
            'firstImage',
            'secondImage',
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
