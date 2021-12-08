<template lang="pug">
    //- moving out - выкатывающий
    component.moving-out(
        :is="rootElement"
    )
        slot
</template>

<script>
import animateWithClasses from '../../mixins/animateWithClasses';

export default {
    mixins: [
        animateWithClasses(
            'move-out',
            'animation',
        ),
    ],
};
</script>

<style lang="scss" scoped>
    @import 'moving-out.scss';
</style>
