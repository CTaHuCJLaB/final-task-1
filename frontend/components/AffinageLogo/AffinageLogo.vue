<template lang="pug">
    p.affinage-logo
        a(
            href="https://affinage.ru/"
            target="_blank"
        )
            base-image(
                class="image--affinage"
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
    @import 'affinage-logo.scss';
</style>
