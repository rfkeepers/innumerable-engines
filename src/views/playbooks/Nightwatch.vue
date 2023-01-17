<template>
<PlaybookPage
    playbookName="nightwatch"
    playbookVersion="v1"
    :showChangelog="true"
>
    <template v-slot:title>The Nightwatch</template>
    <template v-slot:blurb>
        <div>
            Vermin clamber into the city at night, squirming and chewing their way through the cracks in the walls.  Our cats fatten themselves on the lazy ones and our traps only catch the stupid.  Those who survive are clever and resilient.  Emboldended, they prey on us where we are weak.  As they strengthen, we grow more fearful of their tenacity, and their violence.  Someone must do something, else we'll lose everything we have to them.
        </div>
        <br>
        <div>
            The Nightwatch is Dungeon World's dark knight.  What drives this gruesome hero to rid the world of evil?  Justice?  Rightousness?  Or is this simply the way of things in Dungeon World: that power pursues power.  Along the way a Nightwatch may adopt a sidekick as companion, training them in their ways of guerilla vigilanteism.
        </div>
    </template>
    <template v-slot:changelog>
        <h4>2023.01.15: v1</h4>
        <div>
            Large-scale revision of the entire playbook.  The previous direction felt weak: a half-basic mix of derring-do adventure moves and straight up combat buffs that were generally too weak for the investment.  The goals of the revised version are first to bring the imagery into focus by allowing only one power (Enshaden or Moonlight) at a time, and making the associated moves more interesting; and second to fully engage with the story of picking up a sidekick midway through the character's career.
            <br><br>
            <ul>
                <li class="ulitem">Advanced moves (6-10) are now entirely focused around the sidekick and their growth.  Sidekicks can now gain one of the Nightwatch's starting moves, and have access to multiclass moves for growth.</li>
                <li class="ulitem">Creature of the Night, Get Over Here, Shadow Walker, Glider, and Trance were removed.</li>
                <li class="ulitem">Warden, Wings, A Blade in the Darkness, and Henchmen were rewritten in large or small ways.</li>
                <li class="ulitem">The old Caped Crusader move is now Grappling Hook, Enshaden is now Caped Crusader.</li>
                <li class="ulitem">Instead of starting with all the options, character creation now has the player choose between Caped Crusader and A Slice of Moonlight.</li>
                <li class="ulitem">Added the CC0 License</li>
            </ul>
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