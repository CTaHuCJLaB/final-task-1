<template lang="pug">
  base-nav-list(
    :navCaptions="navCaptions"
  )
</template>

<script>
export default {
    data() {
        return {
            navCaptions: [
                'биография',
                'творчество',
                'картины',
                'музеи',
            ],
        };
    },
};
</script>
