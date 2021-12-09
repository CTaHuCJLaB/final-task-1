<template lang="pug">
    p.button
        button.button__core(
            v-bind="$attrs"
            type="button"
        )
            slot(name="icon")
            base-control
</template>

<script>
export default {
    inheritAttrs: false,
};
</script>
