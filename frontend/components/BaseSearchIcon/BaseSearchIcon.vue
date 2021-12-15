<template lang="pug">
    base-svg.svg--search-icon(
        view-box="0 0 18 18"
    )
        path(:d="pathDefinition")
</template>

<script>
import { trimEachWord } from '@/modules/stringProcessing';

export default {
    data() {
        return {
            pathDefinition: trimEachWord(`
                M11.4751 9.6713L16.2001 13.2794
                M7.8751 10.7021C10.6503 10.7021
                12.9001 8.98415 12.9001 6.86492C12.9001
                4.74569 10.6503 3.02771 7.8751
                3.02771C5.09987 3.02771 2.8501 4.74569
                2.8501 6.86492C2.8501 8.98415 5.09987
                10.7021 7.8751 10.7021Z
            `),
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'svg.scss';
</style>
