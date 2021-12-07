<template lang="pug">
  component(
    :is="rootElement"
    :class="`sliding ${hidingClass}`"
  )
    slot
</template>

<script>
import $ from 'jquery';
import { inject } from '@nuxtjs/composition-api';
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        rootElement:
            createStringPropConfig('div'),
        hidingClass:
            createStringPropConfig('h-hide'),
    },
    emits: [
        'slidingstart',
        'slidingcomplete',
    ],
    setup() {
        const outerSlidingState = inject(
            'outerSlidingState',
            { isHidden: true },
        );
        return outerSlidingState;
    },
    data() {
        return {
            isSlidedUp: true,
        };
    },
    computed: {
        $animatingElement() {
            return $(this.$el);
        },
    },
    watch: {
        isHidden() {
            this.$animatingElement
                .slideToggle({
                    duration: 800,
                    start: this.start,
                    complete: this.complete,
                });
        },
    },
    methods: {
        start() {
            if (this.isSlidedUp) {
                this.$animatingElement
                    .removeClass(this.hidingClass);
            }
            this.$parent
                .$emit('slidingstart');
        },
        complete() {
            this.$animatingElement
                .css('display', '');
            if (!this.isSlidedUp) {
                this.$animatingElement
                    .addClass(this.hidingClass);
            }
            this.isSlidedUp = !this.isSlidedUp;
            this.$parent
                .$emit('slidingcomplete');
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'sliding.scss';
</style>
