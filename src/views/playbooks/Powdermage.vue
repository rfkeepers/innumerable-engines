<template>
<PlaybookPage
    playbookName="powdermage"
    :showChangelog="false"
>
    <template v-slot:title>The Powdermage</template>
    <template v-slot:blurb>
        <div>
            The practical issue of the production of destructive utilities is that few appreciate the extent to which an application to the mastery of the utility can be practiced.  Suppose we have a derangement of nature with unparalleled resources for civil demolition.  Some say the means of resolution requires measures adequate only sufficient to disable the coming threat.  I say, why stop there?  A world of appropriate excess exists with the ability to not merely disable the problem, but to remove it from existence altogether!
        </div>
        <br>
        <div>
            Need it done bigger, louder, or with an absolute disregard for safety procedure?  Look no further than the Powdermage.  Their signature weapon may be their blunderbuss- a cannon-like sidearm- but explosive firepower is where their real talents lie.
        </div>
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