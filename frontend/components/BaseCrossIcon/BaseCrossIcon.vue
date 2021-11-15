<template lang="pug">
  base-svg(
    class="svg--cross-icon"
    view-box="0 4 24 16"
  )
    path(:d="pathDefinition")
</template>

<script>
import { trimEachWord } from '@/modules/stringProcessing';

export default {
    data() {
        return {
            pathDefinition: trimEachWord(`
        M15.087 11.933l8.56-8.559a.75.75
        0 000-1.061L21.554.22a.747.747
        0 00-1.06 0l-8.561 8.56L3.373.22a.771.771
        0 00-1.061 0L.22 2.313a.75.75
        0 000 1.061l8.56 8.559-8.56 8.559a.751.751
        0 000 1.062l2.093 2.094a.744.744
        0 001.06 0l8.561-8.56 8.56 8.56a.746.746
        0 001.06 0l2.093-2.094a.751.751
        0 000-1.062l-8.56-8.559z
      `),
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'svg.scss';
</style>
