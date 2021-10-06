<template lang="pug">
  transition(
    name="fade"
    mode="out-in"
  )
    slot
</template>

<style lang="scss" scoped>
@import 'fading.scss';
</style>
