import $ from 'jquery';

export default () => {
    if (process.client) {
        let isFocusWithTab = false;

        const $document = $(document);

        $document.on('keydown', evt => {
            if (evt.key === 'Tab') {
                isFocusWithTab = true;
            }
        });

        $document.on('mousedown', evt => {
            const $activeElement = $(':focus');
            if ($activeElement.has(evt.target)) {
                $activeElement.css('outline', 'none');
            }
            isFocusWithTab = false;
        });

        $document.on('focusin', evt => {
            if (isFocusWithTab) {
                $(evt.target).css(
                    'outline',
                    '2px solid #a5a5a5',
                );
            } else {
                $(evt.target).css('outline', 'none');
            }
        });

        $document.on('blur', '*', evt => {
            $(evt.target).css('outline', 'none');
        });
    }
};
