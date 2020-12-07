<template>
    <div id="notfound" class="notfound">
        <span>Yo, what are you here for?</span>
        <br>
        <span>Go <router-link :to="{path: '/'}" @click="$emit('routed')">home</router-link>.</span>
                
    </div>
</template>

<script>
const notfound = { name: 'notfound' };
export default notfound;
</script>

<style scoped lang="scss">
.notfound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>