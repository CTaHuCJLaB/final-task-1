<template lang="pug">
    p.logo
        a(
            href="https://affinage.ru/"
            target="_blank"
        )
            base-image(
                :title="logo.title"
                :alt="logo.alt"
                :image="logo"
                :dimensions="dimensions"
            )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            dimensions: {
                desktop: {
                    x1Width: 60,
                    canvasWidth: '60px',
                },
            },
        };
    },
    computed: {
        ...mapGetters('indexHeader', [
            'logo',
        ]),
    },
};
</script>

<style lang="scss" scoped>
    @import 'logo.scss';
</style>
