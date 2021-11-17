<template lang="pug">
    .index-intro
        .index-intro__content
            p.h1.h1--vertical(aria-hidden="true")
                | {{verticalH1}}
            h1.h1.h1--horizontal {{horizontalH1}}
                span.visually-hidden {{verticalH1}}
            p.p {{indexIntroParagraph}}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'horizontalH1',
            'verticalH1',
            'indexIntroParagraph',
        ]),
    },
};
</script>

<style lang="scss" scoped>
@import 'index-intro.scss';
</style>
