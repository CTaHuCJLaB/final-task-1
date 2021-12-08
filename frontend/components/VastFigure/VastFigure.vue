<template lang="pug">
    figure.figure.figure--vast
        figcaption.visually-hidden
            | {{figcaption}}
        vast-image
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'paintingTitlePrefix',
        ]),
        ...mapGetters('indexHeader', [
            'imageTitle',
        ]),
        figcaption() {
            return this.paintingTitlePrefix +
                ` "${this.holidayImageTitle}"`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'figure.scss';
</style>
