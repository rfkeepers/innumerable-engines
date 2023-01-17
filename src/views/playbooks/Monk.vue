<template>
<PlaybookPage
    playbookName="monk"
    playbookVersion="v1"
    :showChangelog="true"
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
    <template v-slot:changelog>
        <h4>2023.01.16: v1</h4>
        <div>
            Moderate revision of the playbook.  Cleaned out the weaker moves that weren't pulling much weight.  Brushed up the writing throughout with an eye towards clarity and imagery.Overall the feel of the playbook should orient players towards one of three spaces: a stance-based martial master; a meditative priest; or a pilgrimage-focused knight or warrior.  It will still feel like a combat-heavy playbook- good for campaigns where you can expect to get into lots of fights- but should deliver more flavor than just "gets bonuses to attacks" in the process.
            <br><br>
            <ul>
                <li class="ulitem">Meditation now provides Flow instead of causing immediate effects.  Flow can be spent for the original benefits, and moves involving meditation have been reworked to fit with flow.  This should make meditation and its associated moves more valuable as a focus, and less of an arbitrary thing the monk can do on the side.</li>
                <li class="ulitem">Cleric multiclassing has been better woven into Meditation by adding a second type of hold: Communion.  It's more stuff for the player to track, but provides clearer imagery between the things a Monk might meditate on, and how that meditation benefits them.</li>
                <li class="ulitem">Added a barbarian pilgrimage track (pilgrimage + thirst) to counterpart the Paladin track (pilgrimage + quest).</li>
                <li class="ulitem">Pilgrimage is now an XP driver at base, and doesn't have many supporting moves.  Players looking to make the most of the pilgrimage can explore the Paladin and Barbarian multiclass tracks.</li>
                <li class="ulitem">Added the CC0 License.</li>
            </ul>
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