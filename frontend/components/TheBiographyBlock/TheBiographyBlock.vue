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
                    data-title="Биография художника Бориса Кустодиева"
                    data-description="Борис Кустодиев родился 7 марта 1878 года в Астрахани..."
                    data-image="./img/holiday-mobile@4x.webp"
                )
                read-more-button(
                    :toggle-captions="toggleCaptions"
                    @click.once.native="onButtonFirstClick"
                    @click.native="onButtonClick"
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
    computed: {
        ...mapGetters([
            'biographyH2',
            'lifeEvents',
            'toggleCaptions',
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
        async onButtonFirstClick($event) {
            $event.stopImmediatePropagation();
            await this.$store
                .dispatch('lifeEventsLoading');
            this.isEventListMinimized = false;
        },
        onButtonClick() {
            this.isEventListMinimized = !this.isEventListMinimized;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'section.scss';
</style>
