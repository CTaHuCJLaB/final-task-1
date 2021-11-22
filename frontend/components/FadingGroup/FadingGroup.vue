<template lang="pug">
    transition-group(
        tag="div"
        name="fade"
        mode="out-in"
    )
        slot
</template>

<style lang="scss" scoped>
@import 'fading-group.scss';
</style>
