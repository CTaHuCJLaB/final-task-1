<template lang="pug">
  figure.figure.figure--holiday
    figcaption.visually-hidden
      | {{figcaption}}
    holiday-image
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'paintingTitlePrefix',
            'holidayImageTitle',
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
