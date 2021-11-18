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
import {
    inject, computed, toRef, reactive, provide,
} from '@nuxtjs/composition-api';
import {
    createStringPropConfig, createObjectPropConfig,
} from '@/modules/propConfigs';
import { trimEachWord } from '@/modules/stringProcessing';

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
        const actionObject = toRef(
            props, 'actionObject',
        );
        const outerToggleState = inject(
            'outerToggleState',
            { isOff: true },
        );
        const isOff = toRef(
            outerToggleState,
            'isOff',
        );
        const mergedStates = {
            on: {
                ...stateDefault.on,
                ...props.states.on,
            },
            off: {
                ...stateDefault.off,
                ...props.states.off,
            },
        };
        const { off, on } = mergedStates;
        const description = computed(
            () => {
                const action = isOff.value
                    ? off.action
                    : on.action;
                return trimEachWord(
                    `${action} ${actionObject.value}`,
                );
            },
        );
        const caption = computed(
            () => {
                const caption = isOff.value
                    ? { text: off.caption, classes: '' }
                    : { text: on.caption, classes: '' };
                return caption;
            },
        );
        const outerControlState = reactive({
            description,
            caption,
        });
        provide(
            'outerControlState',
            outerControlState,
        );
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
            let result = '';
            if (off.icon.size && on.icon.size) {
                const toggleSize = this.isOff
                    ? off.icon.size
                    : on.icon.size;
                result += `button--${toggleSize}`;
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
