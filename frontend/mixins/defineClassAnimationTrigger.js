import { ref, reactive, provide }
  from '@nuxtjs/composition-api';

export default {
  setup() {
    const isAnimationStarted = ref(false);
    const outerClassAnimatingState = reactive(
      {
        isAnimationStarted,
      },
    );
    provide(
      'outerClassAnimatingState',
      outerClassAnimatingState,
    );
    return {
      isAnimationStarted,
    };
  },
};
