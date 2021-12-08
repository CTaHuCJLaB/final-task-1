<template lang="pug">
    base-search-bar
        template(#button)
            line-animated-search-button(
                @click.once.native="\
                    $emit('first-button-click')\
                "
            )
</template>
