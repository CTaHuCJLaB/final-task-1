import { provide } from '@nuxtjs/composition-api';

export default previewTitlePrefix => {
    const outerPreviewButtonState = {
        previewTitlePrefix,
    };
    provide(
        'outerPreviewButtonState',
        outerPreviewButtonState,
    );
};
