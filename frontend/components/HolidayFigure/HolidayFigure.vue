<template lang="pug">
  figure.figure.figure--holiday
    figcaption.visually-hidden
      | {{imageTitlePrefix + imageTitle}}
    holiday-image
</template>

<script>
export default {
    computed: {
        homePageData() {
            return this.$store
                .state.homePageData;
        },
        imageTitlePrefix() {
            return this.homePageData
                .imageTitlePrefix;
        },
        imageTitle() {
            return this.homePageData
                .header.image.title;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'figure.scss';
</style>
