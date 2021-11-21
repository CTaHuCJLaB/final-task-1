import _ from 'lodash';
import { inject, provide } from '@nuxtjs/composition-api';

export default injections => ({
    setup() {
        _(injections)
            .forEach((value, key) => {
                const injection = inject(key, value);
                provide(
                    value.newInjectionName,
                    injection,
                );
                _.unset(
                    value,
                    'newInjectionName',
                );
            });
    },
});
