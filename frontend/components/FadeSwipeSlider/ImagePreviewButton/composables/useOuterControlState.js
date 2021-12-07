import { inject, provide }
from '@nuxtjs/composition-api';

export default previewTitle => {
    const outerSliderComposablesState = inject(
        'outerSliderComposablesState',
        { slideTitlePrefix: '' },
    );
    const { slideTitlePrefix } = outerSliderComposablesState;
    const description = 'Перейти к слайду ' +
        `'${slideTitlePrefix} ` +
        `"${previewTitle}"'`;
    const outerControlState = {
        description,
    };
    provide(
        'outerControlState',
        outerControlState,
    );
};
