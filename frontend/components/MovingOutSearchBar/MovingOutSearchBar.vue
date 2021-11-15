<template lang="pug">
  moving-out(
    @transitionend.once.native="\
      isRollingOutDone = true\
    "
  )
    half-animated-search-bar(
      :class="{\
        'is-move-out-ready':\
          isButtonClicked\
      }"
      @first-button-click="\
        isButtonClicked = true\
      "
      @transitionend.once.native="\
        isAnimationStarted = true\
      "
    )
</template>

<script>
import {
    reactive, ref,
    provide,
} from '@nuxtjs/composition-api';
import defineClassAnimationTrigger from '../../mixins/defineClassAnimationTrigger';

export default {
    mixins: [
        defineClassAnimationTrigger,
    ],
    setup() {
        const isRollingOutDone = ref(false);
        const outerFieldState = reactive({
            isFocused:
        ref(isRollingOutDone),
        });
        provide(
            'outerFieldState',
            outerFieldState,
        );
        return {
            isRollingOutDone,
        };
    },
    data() {
        return {
            isButtonClicked: false,
        };
    },
};
</script>
