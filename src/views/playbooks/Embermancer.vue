<template>
<PlaybookPage
    playbookName="embermancer"
    playbookVersion="v1"
    :showChangelog="false"
>
    <template v-slot:title>The Embermancer</template>
    <template v-slot:blurb>
        <div>
            Suppose you could steal a thought, which one would you take?  The location of the monarch's tomb!  The true lack of Lark Fanir?  Humbly, perhaps, mere silent joy at seeing the first smile in your direction.  Which, once taken, would you cherish more?  One that could comfort you on sleepless nights?  One to guide your wandering days towards a goal?  Whichever promises a reward at the end of all this?  Or, maybe, you don't have to choose.  They're all available for the taking, if you so choose.
        </div>
        <br>
        <div>
            The Embermancer is a playbook about taking memories and feelings from others and using them to your advantage.  It's not as focused on swords or sworcery as the standard playbooks, so exercise some caution (ie: check the fit with your table) before picking it up for a game.
        </div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Embermancer',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>