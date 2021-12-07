import { provide } from '@nuxtjs/composition-api';

export default slideTitlePrefix => {
    const outerSliderComposablesState = {
        slideTitlePrefix,
    };
    provide(
        'outerSliderComposablesState',
        outerSliderComposablesState,
    );
};
