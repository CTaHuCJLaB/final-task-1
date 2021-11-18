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
