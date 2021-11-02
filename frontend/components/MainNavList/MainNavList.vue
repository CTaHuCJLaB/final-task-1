<template lang="pug">
  base-nav-list(
    :navTitles="navTitles"
  )
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        navTitles: state => state.navTitles,
    }),
};
</script>
