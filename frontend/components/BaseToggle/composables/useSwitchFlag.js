import { inject } from '@nuxtjs/composition-api';

export default () => {
    const outerToggleState = inject(
        'outerToggleState',
        { isOff: true },
    );

    return outerToggleState.isOff;
};
