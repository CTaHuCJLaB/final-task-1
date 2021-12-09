<template lang="pug">
    base-button.button--toggle(
        :class="classes"
        @focus.once.native="\
            isToggleAnimated = true\
        "
    )
        template(#icon)
            component(:is="shownIcon")
</template>

<script>
import useSwitchFlag from './composables/useSwitchFlag';
import useMergedStates from './composables/useMergedStates';
import useOuterControlState from './composables/useOuterControlState';
import {
    createStringPropConfig, createObjectPropConfig,
} from '@/modules/propConfigs';

const stateDefault = {
    on: {
        action: 'Выключить',
        icon: {
            component: '',
            size: '',
        },
        caption: '',
    },
    off: {
        action: 'Включить',
        icon: {
            component: '',
            size: '',
        },
        caption: '',
    },
};

export default {
    props: {
        states:
            createObjectPropConfig(
                () => stateDefault,
            ),
        actionObject:
            createStringPropConfig(),
    },
    setup(props) {
        const isOff = useSwitchFlag();
        const mergedStates = useMergedStates(stateDefault, props);
        const { on: onState, off: offState } = mergedStates;
        useOuterControlState(props, isOff, onState, offState);
        return {
            isOff,
            mergedStates,
        };
    },
    data() {
        return {
            isToggleAnimated: false,
        };
    },
    computed: {
        classes() {
            const { mergedStates: { on, off } } = this;
            let result;
            if (off.icon.size && on.icon.size) {
                const toggleSize = this.isOff
                    ? off.icon.size
                    : on.icon.size;
                result = `button--${toggleSize}`;
            }

            return result;
        },
        shownIcon() {
            const { mergedStates } = this;

            return this.isOff
                ? mergedStates.off
                    .icon.component
                : mergedStates.on
                    .icon.component;
        },
    },
};
</script>
