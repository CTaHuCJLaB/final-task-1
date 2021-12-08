<template lang="pug">
    //- компонент, анимирующий вложенный компонент
    //- линией - псевдоэлементом "after"
    component(
        :is="rootElement"
        class="after-line-animating"
    )
        slot
</template>

<script>
import animateWithClasses from '../../mixins/animateWithClasses';

export default {
    mixins: [
        animateWithClasses(
            'line-up',
            'transition',
        ),
    ],
};
</script>

<style lang="scss" scoped>
@import 'after-line-animating.scss';
</style>
