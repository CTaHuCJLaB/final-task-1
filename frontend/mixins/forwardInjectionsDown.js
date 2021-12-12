import _ from 'lodash';
import { inject, provide } from '@nuxtjs/composition-api';

export default injections => ({
    setup() {
        _(injections)
            .forEach((value, key) => {
                const injection = inject(key, value);
                _.unset(
                    injection,
                    'newInjectionName',
                );
                provide(
                    value.newInjectionName,
                    injection,
                );
            });
    },
});
