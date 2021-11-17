<template lang="pug">
  base-button(
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
    inject, computed, toRef,
    reactive, provide,
} from '@nuxtjs/composition-api';
import {
    createStringPropConfig,
    createObjectPropConfig,
} from '@/modules/propConfigs';
import {
    prependToEachWord, trimEachWord,
} from '@/modules/stringProcessing';

const stateDefault = {
    on: {
        action: 'Выключить',
        icon: {
            component: 'OffIcon',
            size: '16x16',
        },
        caption: '',
    },
    off: {
        action: 'Включить',
        icon: {
            component: 'OnIcon',
            size: '16x16',
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
        const { off, on } = props.states;
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
        };
    },
    data() {
        return {
            isToggleAnimated: false,
        };
    },
    computed: {
        classes() {
            const { states } = this;
            const toggleSize = this.isOff
                ? states.off.icon.size
                : states.on.icon.size;
            return prependToEachWord(
                `toggle ${toggleSize}`,
                'button--',
            );
        },
        shownIcon() {
            const { states } = this;
            return this.isOff
                ? states.off
                    .icon.component
                : states.on
                    .icon.component;
        },
    },
};
</script>
