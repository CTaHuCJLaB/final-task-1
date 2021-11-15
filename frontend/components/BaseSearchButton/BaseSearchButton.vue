<template lang="pug">
  base-button(
    class="button--search"
  )
    template(#icon)
      base-search-icon
</template>

<script>
import forwardInjectionsDown from '../../mixins/forwardInjectionsDown';

export default {
    mixins: [
        forwardInjectionsDown(
            {
                outerSearchButtonState: {
                    description:
            'Выполнить поиск по сайту',
                    newInjectionName:
            'outerControlState',
                },
            },
        ),
    ],
};
</script>

<style lang="scss" scoped>
    @import 'button.scss';
</style>
