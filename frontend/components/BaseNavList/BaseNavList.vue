<template lang="pug">
  ul.list.list--nav
    li(
      v-for="(nav, i) in navs"
      class="list__item"
      v-smooth-scroll
    )
      a(:href="`#nav_${i}`")
        | {{ nav }}
</template>

<script>
import { createArrayPropConfig }
    from '@/modules/propConfigs';

export default {
    props: {
        navs: createArrayPropConfig(),
    },
};
</script>

<style lang="scss" scoped>
@import 'list.scss';
</style>
