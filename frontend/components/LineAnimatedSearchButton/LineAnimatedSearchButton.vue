<template lang="pug">
  after-line-animating
    template
      underlined-search-button(
        class="is-line-up-ready"
        @click.once.native="\
          isAnimationStarted = true\
        "
      )
</template>

<script>
import defineClassAnimationTrigger
    from '../../mixins/defineClassAnimationTrigger';

export default {
    mixins: [
        defineClassAnimationTrigger,
    ],
};
</script>
