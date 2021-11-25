<template lang="pug">
    p.button
        button.button__core(
            type="button"
            v-bind="$attrs"
        )
            slot(name="icon")
            base-control
</template>

<script>
export default {
    inheritAttrs: false,
};
</script>
