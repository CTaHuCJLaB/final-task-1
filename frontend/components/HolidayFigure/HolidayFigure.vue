<template lang="pug">
  figure.figure.figure--holiday
    figcaption.visually-hidden
      | {{figcaption}}
    holiday-image
</template>

<script>
export default {
    computed: {
        figcaption() {
            return this.$store
                .state.homePageData
                .header.image.title;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'figure.scss';
</style>
