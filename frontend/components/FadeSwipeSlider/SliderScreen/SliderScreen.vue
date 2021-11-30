<template lang="pug">
    //- oбработчик события touchmove добавлен в связи с тем, что
    //- pointermove не всегда срабатывает
    //- вo Vue + Chrome в режиме эмуляции мобильного
    .slider-screen(
        @pointerdown.left.prevent="\
            startCoord = $event.clientX\
        "
        @pointermove.prevent="\
            onScreenPointerMove($event.clientX)\
        "
        @touchmove.prevent="\
            onScreenPointerMove(\
                $event.touches[0].clientX\
            )\
        "
    )
        client-only(placeholder="Загрузка...")
            component(
                :is="isScreenOverflowing ? 'ul' : 'fading'"
                ref="film"
                :class="{\
                    'slider-screen__film': isScreenOverflowing,\
                    'is-transparent': isFilmTransparent,\
                }"
            )
                slide(
                    v-for="(slide, index) in renderedSlides"
                    ref="slides"
                    :key="slide.title + activeSlideIndex"
                    :class="{ 'is-intransitive': isSlideIntransitive }"
                    :isScreenOverflowing="isScreenOverflowing"
                    :slide="slide"
                    @hook:mounted="onSlideMounted(index)"
                )
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import Slide from '../Slide/Slide';
import {
    createArrayPropConfig, createNumberPropConfig,
} from '@/modules/propConfigs';

export default {
    components: {
        Slide,
    },
    props: {
        slides: createArrayPropConfig(),
        activeSlideIndex:
            createNumberPropConfig(null),
    },
    data() {
        return {
            RESPONSE_DELTA_X: 15,
            isScreenOverflowing: null,
            isFilmTransparent: true, // вместо isFilmShown, так как v-show мешает анимации
            isSlideIntransitive: false,
            isScreenRefreshed: true,
            startCoord: null,
            slideWidth: 0,
            slideGap: 0,
        };
    },
    computed: {
        slideCount() {
            return this.slides.length;
        },
        renderedSlides() {
            return this.isScreenOverflowing
                ? this.slides
                : _(this.slides).slice(
                    this.activeSlideIndex,
                    this.activeSlideIndex + 1,
                ).value();
        },
    },
    watch: {
        activeSlideIndex() {
            this.refreshScreen();
        },
    },
    mounted() {
        $(window).on('load', () => {
            this.isFilmTransparent = false;
        });
        $(window).on('load resize', () => {
            this.isScreenOverflowing = $(this.$el)
                .css('overflow-x') === 'hidden';
        });
        $(window).on('resize', () => {
            if (this.isScreenOverflowing) {
                this.slideWidth = $(this.$refs.slides[0].$el).width();
                const filmContentWidth = $(this.$refs.film).width();
                const slidesWidth = this.slideWidth * this.slideCount;
                this.slideGap = (filmContentWidth - slidesWidth) /
                    (this.slideCount - 1);
                this.refreshScreen(0);
                this.isSlideIntransitive = true;
            } else {
                this.isSlideIntransitive = false;
            }
        });
    },
    methods: {
        onSlideMounted(slideIndex) {
            if (slideIndex === this.slideCount - 1) {
                if (this.isScreenOverflowing) {
                    this.slideWidth = $(this.$refs.slides[0].$el).width();
                    const filmContentWidth = $(this.$refs.film).width();
                    const slidesWidth = this.slideWidth * this.slideCount;
                    this.slideGap = (filmContentWidth - slidesWidth) /
                        (this.slideCount - 1);
                    this.refreshScreen(0);
                }
            }
        },
        onScreenPointerMove(clientX) {
            if (!this.isScreenOverflowing || !this.startCoord) {
                return;
            }
            const endCoord = clientX;
            const deltaX = endCoord - this.startCoord;
            if (
                this.activeSlideIndex > 0 &&
                deltaX > this.RESPONSE_DELTA_X
            ) {
                this.decActiveSlideIndex();
                this.startCoord = null;
            } else if (
                this.activeSlideIndex < this.slideCount - 1 &&
                deltaX < -this.RESPONSE_DELTA_X
            ) {
                this.incActiveSlideIndex();
                this.startCoord = null;
            }
        },
        decActiveSlideIndex() {
            if (this.isScreenRefreshed) {
                this.isScreenRefreshed = false;
                if (this.activeSlideIndex > 0) {
                    this.$emit(
                        'update:activeSlideIndex',
                        this.activeSlideIndex - 1,
                    );
                }
            }
        },
        incActiveSlideIndex() {
            if (this.isScreenRefreshed) {
                this.isScreenRefreshed = false;
                if (this.activeSlideIndex < this.slideCount - 1) {
                    this.$emit(
                        'update:activeSlideIndex',
                        this.activeSlideIndex + 1,
                    );
                }
            }
        },
        refreshScreen(duration) {
            const { activeSlideIndex, slideWidth, slideGap } = this;
            const newPosition = activeSlideIndex *
                (slideWidth + slideGap);
            this.scrollFilm(newPosition, duration);
        },
        scrollFilm(newPosition, duration = 700) {
            this.$anime({
                targets: this.$el,
                scrollLeft: {
                    value: newPosition,
                    duration,
                    easing: 'easeInOutCirc',
                },
                complete: () => {
                    this.isScreenRefreshed = true;
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-screen.scss';
</style>
