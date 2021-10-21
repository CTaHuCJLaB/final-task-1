<template lang="pug">
  p.affinage-logo
    a(
        href="https://affinage.ru/"
        target="_blank"
    )
      base-image(
        class="image--affinage"
        v-bind="$data"
        base-file-extension="png"
      )
</template>

<script>
import { trimEachWord } from '@/modules/stringProcessing';

export default {
    data() {
        return {
            imageParamSets: {
                1: {
                    fileName: 'logo-affinage',
                    x1Width: 60,
                    canvasWidth: '60px',
                },
            },
            title: 'Логотип компании "Аффинаж"',
            alt: trimEachWord(
                `Надпись "Аффинаж" белого цвета на латинице
                внутри белого кольцевого оливкового венка.`,
            ),
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'affinage-logo.scss';
</style>
