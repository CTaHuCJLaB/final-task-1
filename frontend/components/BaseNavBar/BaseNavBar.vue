<template lang="pug">
  nav(:class="classes")
    .nav-bar__panel
      slot(name="searchBar")
        base-search-bar
      .slot-wrapper(@click="onToggleClick")
        slot(name="menuToggle")
          base-menu-toggle
    slot(name="navList")
        main-nav-list
</template>

<script>
import { ref, reactive, provide } from '@nuxtjs/composition-api';
import { trimEachWord } from '@/modules/stringProcessing';

export default {
    provide: {
        outerMenuToggleState: {
            menuName:
        'навигационное меню',
        },
    },
    setup() {
        const isNavBarClosed = ref(true);
        const outerToggleState = reactive({
            isOff: isNavBarClosed,
        });
        provide(
            'outerToggleState',
            outerToggleState,
        );
        return {
            isNavBarClosed,
        };
    },
    computed: {
        classes() {
            const stateModifier = this
                .isNavBarClosed
                ? 'is-closed'
                : '';
            return trimEachWord(`
        nav-bar ${stateModifier}
      `);
        },
    },
    methods: {
        onToggleClick() {
            this.isNavBarClosed = !this
                .isNavBarClosed;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'nav-bar.scss';
</style>
