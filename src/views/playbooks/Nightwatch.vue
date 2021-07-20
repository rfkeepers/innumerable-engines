<template>
<PlaybookPage
    playbookName="nightwatch"
    :showChangelog="false"
>
    <template v-slot:title>The Nightwatch</template>
    <template v-slot:blurb>
        <div>
            Vermin clamber into the city at night, squirming and chewing their way through the cracks in the walls.  Our cats fatten themselves on the lazy ones and our traps only catch the stupid.  Those who survive are clever and resilient.  Emboldended, they prey on us where we are weak.  As they grow stronger, we grow more fearful of their tenacity, and their violence.  Someone must do something, else we'll lose everything we have to them.
        </div>
        <br>
        <div>
            The Nightwatch is Dungeon World's dark knight.  A gizmo wielding, cloaked vigilante prowling the streets while the city sleeps.  What drives this gruesome hero to rid the world of evil?  Justice?  Rightousness?  Or is this simply the way of things in Dungeon World: that power pursues power.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Nightwatch',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>