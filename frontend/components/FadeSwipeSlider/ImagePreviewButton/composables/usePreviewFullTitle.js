import { inject }
from '@nuxtjs/composition-api';

export default previewTitle => {
    const outerPreviewButtonState = inject(
        'outerPreviewButtonState',
        { previewTitlePrefix: '' },
    );
    const { previewTitlePrefix } = outerPreviewButtonState;
    const previewFullTitle = previewTitlePrefix +
        ` "${previewTitle}"`;

    return previewFullTitle;
};
