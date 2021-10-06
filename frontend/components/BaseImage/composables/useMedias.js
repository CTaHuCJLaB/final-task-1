import _ from 'lodash';
import minBreakpoints
    from '@/modules/minBreakpoints';

export default imageParamSets => (
    _(minBreakpoints)
        .filter(
            (media, index) => (
                _(imageParamSets.value)
                    .has(index)
            ),
        )
        .map(
            minBreakpoint => (
                (minBreakpoint > 0)
                    ? `(min-width: ${minBreakpoint}px)`
                    : undefined
            ),
        )
        .reverse()
        .value()
);
