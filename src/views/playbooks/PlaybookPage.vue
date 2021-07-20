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
  <div class="subtitle">
    <div class="download">
      <a :href="darkPDF" target="_blank">
        Dark Mode (for screens)
      </a>
    </div>
  </div>
  <br>
  <div class="subtitle">
    <div class="download">
      <a :href="lightPDF" target="_blank">
        Light Mode (for printing)
      </a>
    </div>
  </div>
  <br>
  <div v-if="showChangelog" class="changelog">
    <h2>Changelog:</h2>
    <slot name="changelog"></slot>
  </div>
  <br>
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
    darkPDF() { return `/${this.playbookName}_dark.pdf`; },
    lightPDF() { return `/${this.playbookName}_light.pdf`; },
  },
};
export default dwpbs;
</script>

<style scoped lang="scss">
.playbook {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.breadcrumb {
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}
</style>