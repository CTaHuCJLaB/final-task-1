<template lang="pug">
    .ya-share2(
        ref="share"
        data-bare
        data-curtain
        data-services="vkontakte,twitter,facebook"
        :data-url="`${appURL}/#block_0`"
    )
</template>

<script>
export default {
    computed: {
        appURL() {
            return process.env.appURL;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'ya-share2.scss';
</style>
