<template lang="pug">
    base-toggle(
        :states="states"
        :action-object="menuName"
    )
</template>

<script>
import { inject } from '@nuxtjs/composition-api';

const states = {
    on: {
        action: 'Закрыть',
        icon: {
            component: 'BaseCrossIcon',
            size: '13x13',
        },
    },
    off: {
        action: 'Открыть',
        icon: {
            component: 'BaseBurgerIcon',
            size: '24x13',
        },
    },
};

export default {
    setup() {
        const outerMenuToggleState = inject(
            'outerMenuToggleState',
            { menuName: 'меню' },
        );
        return outerMenuToggleState;
    },
    data() {
        return { states };
    },
};
</script>

<style lang="scss" scoped>
    @import 'button.scss';
</style>
