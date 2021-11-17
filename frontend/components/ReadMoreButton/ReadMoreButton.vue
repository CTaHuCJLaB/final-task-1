<template lang="pug">
    base-toggle.button--read-more(
        :states="states"
    )
</template>

<script>
import { createObjectPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        toggleCaptions: createObjectPropConfig(),
    },
    computed: {
        states() {
            return {
                on: {
                    action: null,
                    icon: {
                        component: null,
                        size: null,
                    },
                    caption: this.toggleCaptions.on,
                },
                off: {
                    action: null,
                    icon: {
                        component: null,
                        size: null,
                    },
                    caption: this.toggleCaptions.off,
                },
            };
        },
    },
};
</script>
