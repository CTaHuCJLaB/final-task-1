import { inject, toRef } from '@nuxtjs/composition-api';

export default () => {
    const outerToggleState = inject(
        'outerToggleState',
        { isOff: true },
    );

    return toRef(
        outerToggleState,
        'isOff',
    );
};
