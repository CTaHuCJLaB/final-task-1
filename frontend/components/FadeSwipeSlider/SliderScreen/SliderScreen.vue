<template lang="pug">
    //- oбработчик события touchmove добавлен в связи с тем, что
    //- pointermove не всегда срабатывает
    //- вo Vue + Chrome в режиме эмуляции мобильного
    .slider-screen(
        @pointerdown.left.prevent="\
            startX = $event.clientX\
        "
        @pointermove.prevent="\
            onScreenPointerMove($event.clientX)\
        "
        @touchmove.prevent="\
            onScreenPointerMove(\
                $event.touches[0].clientX\
            )\
        "
        @pointerup.left.prevent="startX = null"
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
                    :key="slide.title + index"
                    :class="{ 'is-intransitive': isSlideIntransitive }"
                    :isScreenOverflowing="isScreenOverflowing"
                    :slide="slide"
                    @hook:beforeMount="onSlideBeforeMount(index)"
                    @hook:mounted="onSlideMounted(index)"
                )
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import anime from 'animejs';
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
            isRenderingTriggeredByScroll: false,
            isLastSlideRendered: false,
            isSlideIntransitive: false,
            startX: null,
            slideWidth: 0,
            slideGap: 0,
            isScreenRefreshed: true,
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
            if (this.isScreenOverflowing) {
                this.scrollFilm(
                    this.computeNewPosition(),
                );
            }
        },
    },
    mounted() {
        $(window).on('load', () => {
            this.isFilmTransparent = false;
            this.isScreenOverflowing = this
                .findOutScreenOverflowing();
        });
        $(window).on('resize', () => {
            this.isScreenOverflowing = this
                .findOutScreenOverflowing();
            if (this.isScreenOverflowing) {
                if (this.isLastSlideRendered) {
                    this.scrollFilm(
                        this.computeNewPosition(), 0,
                    );
                } else {
                    this.isRenderingTriggeredByScroll = false;
                }
                this.isSlideIntransitive = true;
            } else {
                this.isSlideIntransitive = false;
            }
        });
    },
    methods: {
        onSlideBeforeMount(slideIndex) {
            if (slideIndex === 0) {
                this.isLastSlideRendered = false;
            }
        },
        onSlideMounted(slideIndex) {
            if (slideIndex === this.slideCount - 1) {
                if (this.isScreenOverflowing) {
                    this.isLastSlideRendered = true;
                    if (!this.isRenderingTriggeredByScroll) {
                        this.scrollFilm(
                            this.computeNewPosition(), 0,
                        );
                    }
                }
            }
        },
        onScreenPointerMove(clientX) {
            if (!this.isScreenOverflowing || !this.startX) {
                return;
            }
            const endX = clientX;
            const deltaX = endX - this.startX;
            if (deltaX > this.RESPONSE_DELTA_X) {
                if (this.activeSlideIndex > 0) {
                    this.decActiveSlideIndex();
                    this.startX = null;
                }
            } else if (deltaX < -this.RESPONSE_DELTA_X) {
                if (this.activeSlideIndex < this.slideCount - 1) {
                    this.incActiveSlideIndex();
                    this.startX = null;
                }
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
        computeNewPosition() {
            const slideWidth = $(this.$refs.slides[0].$el)
                .width();
            const filmContentWidth = $(this.$refs.film)
                .width();
            const slidesWidth = slideWidth * this.slideCount;
            const slideGap = (filmContentWidth - slidesWidth) /
                (this.slideCount - 1);
            const newPosition = this.activeSlideIndex *
                (slideWidth + slideGap);

            return newPosition;
        },
        scrollFilm(newPosition, duration) {
            this.isRenderingTriggeredByScroll = true;
            anime({
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
        findOutScreenOverflowing() {
            return $(this.$el)
                .css('overflow-x') === 'hidden';
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-screen.scss';
</style>
