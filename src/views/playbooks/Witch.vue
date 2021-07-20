<template>
<PlaybookPage
    playbookName="witch"
    :showChangelog="false"
>
    <template v-slot:title>The Witch</template>
    <template v-slot:blurb>
        <div>
            Had they left you alone everything could have been pleasant.  Everyone was happy to trade you a hen for a fortune reading, or a coin for tincture to soothe their cough, or to secretly slip you all manner of goodies for warts on their husband's lover.  They're all in on it.  Every one of them.  But whom among them admits as much when a child goes missing?  Not a one.  They sharpen their knives while they spin lies about you: that they never trusted you, that you performed such evil deeds.  Now they think to spring on you, catch you in the night, do they?  But the dark lord whispers warnings of their perfidy.  Let them give chase into the darkened woods, he says.  Let find what waits there.
        </div>
        <br>
        <div>
            With little capacity for direct engagement, the Witch prefers a less forward approach to solving problems.  Manipulation, knowledge, and mental games are their favorite tactics, with hexes- words to curse creatures into living nightmares- as their specialty.  It's not all nastiness, though.  The Witch is also an adept pharmacologist who will cook up healing salves and tinctures to suit all manner of ailments.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Witch',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>