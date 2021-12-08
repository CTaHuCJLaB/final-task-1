<template lang="pug">
    nav.nav-bar(
        :class="{ 'is-closed': isNavBarClosed }"
    )
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
import { ref, provide } from '@nuxtjs/composition-api';

export default {
    provide: {
        outerMenuToggleState: {
            menuName: 'навигационное меню',
        },
    },
    setup() {
        const isNavBarClosed = ref(true);
        const outerToggleState = {
            isOff: ref(isNavBarClosed),
        };
        provide(
            'outerToggleState',
            outerToggleState,
        );
        return {
            isNavBarClosed,
        };
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
