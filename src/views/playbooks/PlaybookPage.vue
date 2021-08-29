<template>
<div class="breadcrumb" @click="routeTo">
  <a href="/dwplaybooks">↢ Playbooks</a>
</div>
<div class="playbook">
  <h1 class="title">
    <slot name="title"></slot>
  </h1>
  <div class="blurb">
    <slot name="blurb"></slot>
  </div>
  <br>
  <h2 class="subtitle">
    <a :href="darkPDF" target="_blank">
      Dark Mode (for screens)
    </a>
  </h2>
  <h2 class="subtitle">
    <a :href="lightPDF" target="_blank">
      Light Mode (for printing)
    </a>
  </h2>
  <br>
  <div v-if="showChangelog" class="changelog">
    <h2>Changelog:</h2>
    <slot name="changelog"></slot>
  </div>
  <br v-if="showChangelog">
  <hr>
  <br>
</div>
</template>

<script>
const dwpbs = {
  name: 'PlaybookPageTemplate',
  props: {
    playbookName: String,
    showChangelog: Boolean,
  },
  methods: {
    routeTo() {
      this.$emit('routed');
      this.$router.push('/dwplaybooks');
    },
  },
  computed: {
    darkPDF() { return `/dungeon_world_playbooks/${this.playbookName}_dark.pdf`; },
    lightPDF() { return `/dungeon_world_playbooks/${this.playbookName}_light.pdf`; },
  },
};
export default dwpbs;
</script>

<style scoped lang="scss">
</style>