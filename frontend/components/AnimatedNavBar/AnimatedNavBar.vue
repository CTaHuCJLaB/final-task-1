<template lang="pug">
  base-nav-bar
    template(#searchBar)
      moving-out-search-bar
    template(#menuToggle)
      width-smoothed-menu-toggle(
        @click.native="onToggleClick"
      )
    template(#navList)
      sliding-main-nav-list(
        @slidingcomplete="\
          unhandledClickCount--\
        "
      )
</template>

<script>
import { ref, reactive, provide }
    from '@nuxtjs/composition-api';

export default {
    setup() {
        const isNavListHidden = ref(true);
        const outerSlidingState = reactive({
            isHidden: isNavListHidden,
        });
        provide(
            'outerSlidingState',
            outerSlidingState,
        );
        return {
            isNavListHidden,
        };
    },
    data() {
        return {
            unhandledClickCount: 0,
        };
    },
    methods: {
        onToggleClick($event) {
            if (this.unhandledClickCount < 2) {
                this.isNavListHidden = !this
                    .isNavListHidden;
                this.unhandledClickCount += 1;
            } else {
                $event.stopPropagation();
            }
        },
    },
};
</script>
