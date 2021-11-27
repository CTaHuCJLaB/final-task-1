import { inject, reactive, provide }
from '@nuxtjs/composition-api';

export default previewTitle => {
    const outerSliderComposablesState = inject(
        'outerSliderComposablesState',
        { paintingTitlePrefix: '' },
    );
    const { paintingTitlePrefix } = outerSliderComposablesState;
    const description = 'Перейти к слайду ' +
        `'${paintingTitlePrefix} ` +
        `"${previewTitle}"'`;
    const outerControlState = reactive({
        description,
    });
    provide(
        'outerControlState',
        outerControlState,
    );
};
