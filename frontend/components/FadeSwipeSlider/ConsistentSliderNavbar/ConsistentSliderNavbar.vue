<template lang="pug">
    .consistent-slider-navbar
        base-button.button--left(
            ref="leftArrow"
            @click.native="onLeftArrowClick"
        )
        .fade-swipe-slider__slide-info
            p.fade-swipe-slider__slide-title
            p.fade-swipe-slider__slide-counter
        base-button.button--right(
            @click.native="onRightArrowClick"
        )
</template>
