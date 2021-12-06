<template lang="pug">
    picture.image
        source(
            type="image/webp"
            :media="medias[index]"
            :srcset="srcSet"
            :sizes="canvasWidths[index]"
            v-for="(srcSet, index)\
                in webpSrcSets\
            "
        )
        source(
            :media="medias[index]"
            :srcset="srcSet"
            :sizes="canvasWidths[index]"
            v-for="(srcSet, index)\
                in restNotWebpSrcSets\
            "
        )
        img.image__core(
            :class="{\
                'h-erase-background-color':\
                imageLoaded\
            }"
            ref="core"
            v-bind="$attrs"
            :src="src"
            :srcset="zeroNotWebpSrcSet"
            :sizes="lastCanvasWidth"
            @load="\
                imageLoaded=\
                    $refs.core\
                        ? $refs.core.naturalWidth > 1\
                        : false\
            "
        )
</template>

<script>
import { toRefs } from '@nuxtjs/composition-api';
import useMedias from './composables/useMedias';
import useSrcSets from './composables/useSrcSets';
import useCanvasWidths from './composables/useCanvasWidths';
import { createObjectPropConfig } from '@/modules/propConfigs';

export default {
    inheritAttrs: false,
    props: {
        image: createObjectPropConfig(),
        dimensions: createObjectPropConfig(),
    },
    setup(props) {
        const { image, dimensions } = toRefs(props);
        const medias = useMedias(dimensions.value);
        const src = dimensions.value.mobile
            ? process.env.baseURL +
                image.value.mobile
                    .notWebp[0].url
            : '';
        const {
            zeroNotWebpSrcSet, restNotWebpSrcSets,
            webpSrcSets,
        } = useSrcSets(
            image.value, dimensions.value,
        );
        const {
            canvasWidths, lastCanvasWidth,
        } = useCanvasWidths(dimensions.value);
        return {
            medias,
            src,
            zeroNotWebpSrcSet,
            restNotWebpSrcSets,
            webpSrcSets,
            canvasWidths,
            lastCanvasWidth,
        };
    },
    data() {
        return {
            imageLoaded: false,
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
