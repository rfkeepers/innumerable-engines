<template>
<PlaybookPage
    playbookName="dancer"
    playbookVersion="v1"
    :showChangelog="false"
>
    <template v-slot:title>The Dancer</template>
    <template v-slot:blurb>
        <div>
            As a performer, others always think of you as a character, an entertainment, not a real person.  They mistake the costume for the body.  They see you through their imagination, their desires.  So you learn to become their desire, to wrap that image around yourself as if a shawl or a veil.  Once you do that, once you become someone's desire, you own them.  They will do anything for you.
        </div>
        <br>
        <div>
            The Dancer is a multiclass playground, playing off of Dungeon World's core Bard, Fighter, Cleric, and Barbarian to form a completely different framework around their themes.  Sensual, attention driven, and possibly even battle-capable, the Dancer is a playbook of many varied options.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Dancer',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>