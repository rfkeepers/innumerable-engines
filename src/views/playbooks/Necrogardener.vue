<template>
<PlaybookPage
    playbookName="necrogardener"
    :showChangelog="false"
>
    <template v-slot:title>The Necrogardener</template>
    <template v-slot:blurb>
        <div>
            It's no surprise that a garden full of bony vines and rotting pitcherpots would get bad rapport.  People so love their sweet, fertile flowers and their fresh greens.  But oh! the floral world is strange and fecund with warped delights.  Fruits whose bursting juices bleed out the corners of your mouth when bitten.  Rasping, bitter herbs like the exhalation of corpses.  Hosts of dream-inducing nightcaps.  Wicked, wicked must I be to want (dare!) grow those instead of timid carnations.
        </div>
        <br>
        <div>
            Why raise the undead when you can grow your own from seed?  The Necrogardener is an atypical necromancer, far more interested in the world's flora than its fauna.  With a bit of ritual preparation their black thumb can ripen all kinds of abominations.  If the party can abide such a grotesque palate, they might even get some free produce out of the deal.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Necrogardener',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>