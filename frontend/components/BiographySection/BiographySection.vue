<template lang="pug">
    section(
        id="block_0"
        :class="'section section--light'\
            + ' section--biography'"
    )
        .section__content
            .section__grid
                h2.h2 биография
                life-event-list
                share-block(
                    data-title="Биография художника Бориса Кустодиева"
                    data-description="Борис Кустодиев родился 7 марта 1878 года в Астрахани..."
                    data-image="/img/holiday-mobile@4x.webp"
                )
                read-more-button
</template>

<style lang="scss" scoped>
@import 'section.scss';
</style>
