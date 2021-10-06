<template lang="pug">
  p.button
    button.button__core(
      type="button"
    )
      slot(name="icon")
      base-control
</template>

<style lang="scss" scoped>
@import 'button.scss';
</style>
