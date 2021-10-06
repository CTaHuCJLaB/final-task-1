<template lang="pug">
  base-svg(
    class="svg--search-icon"
    view-box="0 0 18 18"
  )
    path(:d="pathDefinition")
</template>

<script>
import { trimEachWord }
    from '@/modules/stringProcessing';

export default {
    data() {
        return {
            pathDefinition: trimEachWord(`
        M7.875 12.825a5.025 5.025
        0 100-10.05 5.025 5.025
        0 000 10.05zm3.6-1.35L16.2 16.2
      `),
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'svg.scss';
</style>
