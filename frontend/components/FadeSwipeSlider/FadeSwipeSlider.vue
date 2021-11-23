<template lang="pug">
    .fade-swipe-slider
        .fade-swipe-slider__random-navbar
            slider-pagination(
                :slidePreviews="slidePreviews"
                :active-slide-index="activeSlideIndex"
                @previewclick="onPreviewClick"
            )
            p.fade-swipe-slider__link
                nuxt-link(:to="{ path: '/paintings' }")
                    | все картины
        slider-screen(
            :slides="slides"
            :active-slide-index="activeSlideIndex"
        )
        consistent-slider-navbar(
            @leftarrowclick="onLeftArrowClick"
            @rightarrowclick="onRightArrowClick"
        )
</template>

<script>
import {
    ref, computed, reactive, provide,
    useStore,
} from '@nuxtjs/composition-api';
import SliderPagination from './SliderPagination/SliderPagination';
import SliderScreen from './SliderScreen/SliderScreen';
import ConsistentSliderNavbar
from './ConsistentSliderNavbar/ConsistentSliderNavbar';

export default {
    components: {
        SliderPagination,
        SliderScreen,
        ConsistentSliderNavbar,
    },
    setup() {
        const store = useStore();
        const slidePreviews = computed(
            () => store.getters.slidePreviews,
        );
        const slides = computed(
            () => store.getters.slides,
        );
        const activeSlideIndex = ref(4);
        const activeSlideTitle = computed(
            () => slides.value[activeSlideIndex.value]
                .title,
        );
        const slideCount = slides.value.length;
        const outerSlideInfoState = reactive({
            activeSlideIndex,
            activeSlideTitle,
            slideCount,
        });
        provide(
            'outerSlideInfoState',
            outerSlideInfoState,
        );
        return {
            activeSlideIndex,
            slidePreviews,
            slides,
        };
    },
    methods: {
        onLeftArrowClick() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            }
        },
        onRightArrowClick() {
            if (this.activeSlideIndex < this.slides.length - 1) {
                this.activeSlideIndex++;
            }
        },
        onPreviewClick(newActiveSlideIndex) {
            this.activeSlideIndex = newActiveSlideIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'fade-swipe-slider.scss';
</style>
