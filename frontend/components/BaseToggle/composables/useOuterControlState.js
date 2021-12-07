import { toRef, computed, provide } from '@nuxtjs/composition-api';

export default (props, isOff, onState, offState) => {
    const actionObject = toRef(
        props, 'actionObject',
    );
    const description = computed(
        () => {
            const action = isOff.value
                ? offState.action
                : onState.action;
            return `${action} ${actionObject.value}`;
        },
    );
    const caption = computed(
        () => {
            const caption = isOff.value
                ? { text: offState.caption, classes: '' }
                : { text: onState.caption, classes: '' };
            return caption;
        },
    );
    const outerControlState = {
        description,
        caption,
    };
    provide(
        'outerControlState',
        outerControlState,
    );
};
