<template lang="pug">
    base-toggle.button--read-more(
        :states="states"
        :action-object="actionObject"
    )
</template>

<script>
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        onAction: createStringPropConfig('Свернуть'),
        offAction: createStringPropConfig('Развернуть'),
        actionObject: createStringPropConfig(),
    },
    computed: {
        readMoreToggleData() {
            return this.$store
                .getters.readMoreToggleData;
        },
        states() {
            return {
                on: {
                    action: this.onAction,
                    icon: {
                        component: null,
                        size: null,
                    },
                    caption: this.readMoreToggleData
                        .onCaption,
                },
                off: {
                    action: this.offAction,
                    icon: {
                        component: null,
                        size: null,
                    },
                    caption: this.readMoreToggleData
                        .offCaption,
                },
            };
        },
    },
};
</script>
