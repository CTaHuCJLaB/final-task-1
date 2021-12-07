<template lang="pug">
    section.section.section--light(
        id="block_0"
        :class="'section--biography'"
    )
        .section__content
            .section__grid
                h2.h2 {{biographyH2}}
                definition-list(
                    :items="processedLifeEvents"
                )
                share-block(
                    block-anchor="block_0"
                    :data-title="shareTitle"
                    :data-description="shareDescription"
                    :data-image="shareImage"
                )
                read-more-toggle(
                    :class="{ 'is-waiting' : areEventsLoading }"
                    @click.once.native="onFirstToggleClick"
                    :action-object="actionObject"
                    @click.native="onToggleClick"
                )
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import { ref, provide } from '@nuxtjs/composition-api';

export default {
    setup() {
        const isEventListMinimized = ref(true);
        const outerToggleState = {
            isOff: ref(isEventListMinimized),
        };
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
            areEventsLoaded: false,
            areEventsLoading: false,
        };
    },
    computed: {
        ...mapGetters('biographyBlock', [
            'biographyH2',
            'lifeEvents',
            'shareTitle',
            'shareDescription',
            'shareImage',
        ]),
        processedLifeEvents() {
            let processedLifeEvents = this.lifeEvents;
            if (this.isEventListMinimized) {
                processedLifeEvents = _(this.lifeEvents)
                    .slice(0, 3).value();
            }

            return processedLifeEvents;
        },
    },
    methods: {
        async onFirstToggleClick($event) {
            $event.stopImmediatePropagation();
            await this.loadLifeEvents();
            if (this.areEventsLoaded) {
                this.isEventListMinimized = false;
            }
        },
        async onToggleClick() {
            if (!this.areEventsLoaded) {
                await this.loadLifeEvents();
            } else {
                this.isEventListMinimized = !this.isEventListMinimized;
            }
        },
        async loadLifeEvents() {
            this.areEventsLoading = true;
            this.areEventsLoaded = await this.$store
                .dispatch('biographyBlock/lifeEventsLoading');
            this.areEventsLoading = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
