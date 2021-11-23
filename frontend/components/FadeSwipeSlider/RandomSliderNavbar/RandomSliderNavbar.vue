<template lang="pug">
    .random-slider-navbar
        slider-pagination(
            :slidePreviews="slidePreviews"
            :active-slide-index="activeSlideIndex"
            @previewclick="onPreviewClick"
        )
        a.fade-swipe-slider__link(href="http://localhost:3000/paintings")
        | все картины
</template>
