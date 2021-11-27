import { provide } from '@nuxtjs/composition-api';

export default store => {
    const { paintingTitlePrefix } = store.getters;
    const outerSliderComposablesState = {
        paintingTitlePrefix,
    };
    provide(
        'outerSliderComposablesState',
        outerSliderComposablesState,
    );
};
