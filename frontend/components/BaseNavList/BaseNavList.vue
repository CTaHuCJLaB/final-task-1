<template lang="pug">
  ul.list.list--nav
    li(
      v-for="(navCaption, i) in navCaptions"
      class="list__item"
    )
        nuxt-link(
            :to="{ path: '/', hash: `#block_${i}`}"
        )
            | {{ navCaption }}
</template>

<script>
import { createArrayPropConfig }
    from '@/modules/propConfigs';

export default {
    props: {
        navCaptions: createArrayPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'list.scss';
</style>
