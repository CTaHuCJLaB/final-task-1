<template lang="pug">
  figure.figure.figure--holiday
    figcaption.visually-hidden
      | {{figcaption}}
    holiday-image
</template>

<script>
import { mapGetters } from 'vuex';
import { createImageTitle } from '@/modules/imageDataPreparing';

export default {
    computed: {
        ...mapGetters([
            'imageTitlePrefix',
            'holidayImageTitle',
        ]),
        figcaption() {
            return createImageTitle(
                this.imageTitlePrefix,
                this.holidayImageTitle,
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'figure.scss';
</style>
