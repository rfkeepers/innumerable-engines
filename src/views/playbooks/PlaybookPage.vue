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
  <hr v-if="!showChangelog">
  <br>
</div>
</template>

<script>
const dwpbs = {
  name: 'PlaybookPageTemplate',
  props: {
    playbookName: String,
    showChangelog: Boolean,
    playbookVersion: String,
  },
  methods: {
    routeTo() {
      this.$emit('routed');
      this.$router.push('/dwplaybooks');
    },
    pdfURL(name, variant, version) {
      return `/dungeon_world_playbooks/${name}_${variant}${version}.pdf`;
    },
  },
  computed: {
    playbookVersionSuffix() { return this.playbookVersion ? "_"+this.playbookVersion : ""; },
    darkPDF() { return this.pdfURL(this.playbookName, "dark", this.playbookVersionSuffix); },
    lightPDF() { return this.pdfURL(this.playbookName, "light", this.playbookVersionSuffix); },
  },
};
export default dwpbs;
</script>

<style scoped lang="scss">
</style>