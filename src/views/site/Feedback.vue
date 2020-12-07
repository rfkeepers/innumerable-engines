<template>
    <div id="feedback" class="feedback">
        <span>Have some feedback about the site or the games?</span>
        <span>Maybe you just want to say "Hello!"?</span>
        <span>&nbsp;</span>
        <span>Go ahead and tell us what's good at <a href="mailto:keepers@innumerable-engines.net">innumerable.engines@gmail.com</a>.</span>
    </div>
</template>

<script>
const feedback = { name: 'feedback' };
export default feedback;
</script>

<style scoped lang="scss">
.feedback {
    text-align: center;
    display: flex;
    flex-direction: column;
}
</style>