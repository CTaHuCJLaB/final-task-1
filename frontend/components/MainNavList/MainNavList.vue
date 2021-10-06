<template lang="pug">
  base-nav-list(
    :navs="navs"
  )
</template>

<script>
export default {
    data() {
        return {
            navs: [
                'биография',
                'творчество',
                'картины',
                'музеи',
            ],
        };
    },
};
</script>
