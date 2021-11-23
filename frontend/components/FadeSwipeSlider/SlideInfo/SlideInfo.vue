<template lang="pug">
    .slide-info
        p.slide-info__title
            | {{activeSlideTitle}}
        p.slide-info__counter
            | {{activeSlideIndex + 1}}
            span.slide-info__faded-text
                |  / {{slideCount}}
</template>

<script>
import { inject, toRefs } from '@nuxtjs/composition-api';

export default {
    setup() {
        const outerSlideInfoState = inject(
            'outerSlideInfoState',
            {
                activeSlideTitle: '',
                activeSlideIndex: undefined,
                slideCount: 0,
            },
        );

        return toRefs(outerSlideInfoState);
    },
};
</script>

<style lang="scss" scoped>
@import 'slide-info.scss';
</style>
