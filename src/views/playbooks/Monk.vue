<template>
<PlaybookPage
    playbookName="monk"
    :showChangelog="false"
>
    <template v-slot:title>The Monk</template>
    <template v-slot:blurb>
        <div>
            We travel, some of us forever, to seek other places, other lives, other souls.  The world in turn, with all its wonders and demons, waits patiently for our arrival.  Strangers look to the horizon in anticipation that we may crest the distant hill.  The unknown calls out with yearning for discovery.  All we need to do, to find ourselves lost amongst the unimaginable, is simply leave everything behind.
        </div>
        <br>
        <div>
            The Monk seeks enlightenment through travel.  A student of the world, they strive for knowledge and wisdom from people and places beyond their imagination.  Yet journey through Dungeon World is perilous; few can survive on philosophy alone.  The Monk thus yearns to master the mind and the body both.  To master themselves through combat.  To transcend their bodily limits, hardening flesh and technique toward perfection.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Monk',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>