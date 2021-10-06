<template lang="pug">
  base-button(:class="classes")
    template(#description)
      span читать больше
    template(#icon)
      arrow-icon
</template>

<script>
export default {
    data() {
        return {
            classes: 'button--load-more',
        };
    },
};
</script>

<style lang="scss" scoped>
    .button--load-more {
        width: 120px;
        //height: 18px;
    }
</style>
