<template lang="pug">
    ul.slider-pagination
        li.slider-pagination__item(
            v-for="(slideURL, index) in currentSlideURLs"
        )
            base-button
                base-image(
                    :imageParamSets="{\
                        1: {\
                            fileName: slideURL,\
                            x1Width: 120,\
                            canvasWidth: '120px',\
                        }\
                    }"
                    title=`Превью слайда №${index + 1}`,
                    alt='',
                )
</template>

<script>
export default {
    data() {
        return {
            currentSlideURLs: [],
        };
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-pagination.scss';
</style>
