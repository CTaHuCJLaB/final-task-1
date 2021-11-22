// миксин для анимирования с помощью css-классов
import $ from 'jquery';
import { appendToEachWord } from '../modules/stringProcessing';
import { createStringPropConfig } from '@/modules/propConfigs';

export default (
    animationName,
    animatingProperties,
) => ({
    inject: [
        'outerClassAnimatingState',
    ],
    props: {
        rootElement:
        createStringPropConfig('div'),
    },
    data() {
        return {
            $animatedElement: null,
        };
    },
    computed: {
        isAnimationStarted() {
            return this
                .outerClassAnimatingState
                .isAnimationStarted;
        },
    },
    watch: {
        isAnimationStarted(newValue, oldValue) {
            if (!oldValue && newValue) {
                this.$animatedElement = $(this.$el)
                    .children(':first');
                this.animate();
                const animatingEndEvents = appendToEachWord(
                    animatingProperties, 'end',
                );
                this.$animatedElement
                    .one(animatingEndEvents, () => {
                        this.$animatedElement
                            .removeClass(`
                                is-${animationName}-animated
                                is-${animationName}-ready
                            `);
                    });
            }
        },
    },
    methods: {
        animate() {
            this.$animatedElement
                .addClass(
                    `is-${animationName}-animated`,
                );
        },
    },
});
