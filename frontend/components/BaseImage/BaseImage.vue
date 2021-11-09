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
        in notWebpSrcSets\
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
          $refs.core.naturalWidth > 1\
      "
    )
</template>

<script>
import { toRefs } from '@nuxtjs/composition-api';
import useMedias from './composables/useMedias';
import useSrcSets from './composables/useSrcSets';
import useCanvasWidths from './composables/useCanvasWidths';
import {
    createObjectPropConfig, createArrayPropConfig,
} from '@/modules/propConfigs';

export default {
    inheritAttrs: false,
    props: {
        imageParamSets:
            createObjectPropConfig(),
        dotsPerPixelArray:
            createArrayPropConfig(
                () => [1, 1.5, 2, 3, 4],
            ),
    },
    setup(props) {
        const { imageParamSets } = toRefs(props);
        const medias = useMedias(imageParamSets);
        const src = imageParamSets
            .relativeUrls.notWebp[0];
        const {
            zeroNotWebpSrcSet, notWebpSrcSets,
            webpSrcSets,
        } = useSrcSets(props);
        const {
            canvasWidths, lastCanvasWidth,
        } = useCanvasWidths(
            imageParamSets,
        );
        return {
            medias,
            src,
            zeroNotWebpSrcSet,
            notWebpSrcSets,
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
