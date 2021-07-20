<template>
<PlaybookPage
    playbookName="worldsmith"
    :showChangelog="false"
>
    <template v-slot:title>The Worldsmith</template>
    <template v-slot:blurb>
        <div>
            All manner of smith obsesses over steel.  But steel, for such value that it brings, is nothing without the baser elements.  How would you heat it, without fire?  What would you use to temper it, without stone?  Could you harden it, without water to quench the heat?  Fire, stone, and water, these are a smith's true tools.  Steel is just a byproduct, a contaminant.  What better way is there to improve the process than to reduce it to the fundamental properties?
        </div>
        <br>
        <div>
            The Worldsmith is a living armory, able to weave and temper the raw elements themselves into weapons and armor.  Their products have limited durability, and cannot survive the extent of use that a metal item might.  But in turn their resources are cheap and plentiful, and the process fast and simple.  No group was ever so well equipped for Dungeon World as the one with a personal smith.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Worldsmith',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>