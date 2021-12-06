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
import { createImageParamSets } from './utils/imageDataPreparing';
import {
    createObjectPropConfig, createArrayPropConfig,
} from '@/modules/propConfigs';

export default {
    inheritAttrs: false,
    props: {
        image: createObjectPropConfig(),
        dimensions: createObjectPropConfig(),
        dotsPerPixelArray:
            createArrayPropConfig(
                () => [1, 1.5, 2, 3, 4],
            ),
    },
    setup(props) {
        const { image, dimensions } = toRefs(props);
        const imageParamSets = createImageParamSets(
            image.value, dimensions.value,
        );
        const medias = useMedias(imageParamSets);
        const src = imageParamSets[0]
            ? process.env.baseURL +
                imageParamSets[0]
                    .relativeUrls.notWebp[0]
            : '';
        const {
            zeroNotWebpSrcSet, restNotWebpSrcSets,
            webpSrcSets,
        } = useSrcSets(
            imageParamSets,
            props.dotsPerPixelArray,
        );
        const {
            canvasWidths, lastCanvasWidth,
        } = useCanvasWidths(imageParamSets);
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
