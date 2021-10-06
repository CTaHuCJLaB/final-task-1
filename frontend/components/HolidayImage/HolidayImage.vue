<template lang="pug">
  base-image(
    class="image--holiday"
    :alt="alt"
    :image-param-sets="imageParamSets"
  )
</template>

<script>
import { trimEachWord }
    from '@/modules/stringProcessing';

export default {
    data() {
        return {
            imageName: 'holiday',
            alt: trimEachWord(
                `Жители деревни танцуют под гармонь
        на фоне изб, осенних деревьев и полей.`,
            ),
        };
    },
    computed: {
        imageParamSets() {
            return {
                0: {
                    fileName:
            `${this.imageName}-mobile`,
                    x1Width: 320,
                    canvasWidth: '100vw',
                },
                1: {
                    fileName:
            `${this.imageName}-desktop`,
                    x1Width: 460,
                    canvasWidth:
            'calc(460 / 800 * 100vh)',
                },
            };
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
