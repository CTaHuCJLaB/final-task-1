<template lang="pug">
    section(
        id="block_0"
        :class="'section section--light'\
            + ' section--biography'"
    )
        .section__content
            .section__grid
                h2.h2 {{biographyH2}}
                life-event-list(
                    :life-events="processedLifeEvents"
                )
                share-block(
                    block-anchor="block_0"
                    :data-title="shareTitle"
                    :data-description="shareDescription"
                    :data-image="shareImage"
                )
                read-more-toggle(
                    :action-object="actionObject"
                    @click.once.native="onFirstToggleClick"
                    @click.native="onToggleClick"
                )
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import { ref, reactive, provide } from '@nuxtjs/composition-api';

export default {
    setup() {
        const isEventListMinimized = ref(true);
        const outerToggleState = reactive({
            isOff: isEventListMinimized,
        });
        provide(
            'outerToggleState',
            outerToggleState,
        );
        return {
            isEventListMinimized,
        };
    },
    data() {
        return {
            actionObject: 'хронологию',
        };
    },
    computed: {
        ...mapGetters([
            'biographyH2',
            'lifeEvents',
            'biographyShareBlock',
        ]),
        processedLifeEvents() {
            let processedLifeEvents = this.lifeEvents;
            if (this.isEventListMinimized) {
                processedLifeEvents = _(this.lifeEvents)
                    .slice(0, 3).value();
            }

            return processedLifeEvents;
        },
        shareTitle() {
            return this.biographyShareBlock
                .title;
        },
        shareDescription() {
            return this.biographyShareBlock
                .description;
        },
        shareImage() {
            return process.env.baseURL +
                this.biographyShareBlock.image.url;
        },
    },
    methods: {
        async onFirstToggleClick($event) {
            $event.stopImmediatePropagation();
            await this.$store
                .dispatch('lifeEventsLoading');
            this.isEventListMinimized = false;
        },
        onToggleClick() {
            this.isEventListMinimized = !this.isEventListMinimized;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
