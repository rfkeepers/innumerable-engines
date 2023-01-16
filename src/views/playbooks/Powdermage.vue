<template>
<PlaybookPage
    playbookName="powdermage"
    playbookVersion="v1"
    :showChangelog="true"
>
    <template v-slot:title>The Powdermage</template>
    <template v-slot:blurb>
        <div>
            The practical issue of the production of destructive utilities is that few appreciate the extent to which an application to the mastery of the utility can be practiced.  Suppose we have a derangement of nature with unparalleled resources for civil demolition: some would say the means of resolution requires measures adequate only sufficient to disable the coming threat.  I say, why stop there?  A world of appropriate excess exists!  It holds the ability to not merely disable the problem, but to remove it from existence altogether.
        </div>
        <br>
        <div>
            Need it done bigger, louder, or with an absolute disregard for safety procedure?  Look no further than the Powdermage.  Their signature weapon may be their blunderbuss- a cannon-like sidearm- but explosive firepower is where their real talents lie.
        </div>
    </template>
    <template v-slot:changelog>
      <h4>2023.01.15: v1</h4>
      <div>Revised the grenade sets.  The starting set is now purely destructive, while the inverted set is oriented toward tactical support instead.  Additionally shuffled around a couple moves to make the class feel a little less like a combat-only campaign choice.</div>
    </template>
</PlaybookPage>
</template>

<script>
import PlaybookPage from '@/views/playbooks/PlaybookPage.vue'
export default {
    name: 'Powdermage',
    components: {'PlaybookPage': PlaybookPage}
};
</script>

<style scoped lang="scss">
</style>