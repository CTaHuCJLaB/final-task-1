<template lang="pug">
  .search-bar
    .slot-wrapper(
      v-if="isSearchBarOpen"
    )
      slot(name="field")
        base-search-field
    .slot-wrapper(
      @click.once="\
        isSearchBarOpen = true\
      "
    )
      slot(name="button")
        base-search-button
</template>

<script>
import {
    reactive, computed,
    ref, provide,
} from '@nuxtjs/composition-api';

export default {
    setup() {
        const isSearchBarOpen = ref(false);
        const outerSearchButtonState = reactive({
            description:
                computed(
                    () => {
                        const action = isSearchBarOpen
                            .value
                            ? 'Выполнить поиск'
                            : 'Открыть поле поиска';
                        return `${action} по сайту`;
                    },
                ),
        });
        provide(
            'outerSearchButtonState',
            outerSearchButtonState,
        );
        return {
            isSearchBarOpen,
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'search-bar.scss';
</style>
