<template lang="pug">
    base-toggle.button--read-more(
        :states="states"
        :action-object="actionObject"
    )
</template>

<script>
import { mapGetters } from 'vuex';
import { createStringPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        onAction: createStringPropConfig('Свернуть'),
        offAction: createStringPropConfig('Развернуть'),
        actionObject: createStringPropConfig(),
    },
    computed: {
        ...mapGetters([
            'readMoreToggleData',
        ]),
        states() {
            return {
                on: {
                    action: this.onAction,
                    caption: this.readMoreToggleData
                        .onCaption,
                },
                off: {
                    action: this.offAction,
                    caption: this.readMoreToggleData
                        .offCaption,
                },
            };
        },
    },
};
</script>
