import { provide } from '@nuxtjs/composition-api';

export default store => {
    const { previewTitlePrefix } = store.getters;
    const outerPreviewButtonState = {
        previewTitlePrefix,
    };
    provide(
        'outerPreviewButtonState',
        outerPreviewButtonState,
    );
};
