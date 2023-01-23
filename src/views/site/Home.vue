<template>
  <div class="home">
    <div class="releases">
      <br>
      <h1 class="title clickable" @click="routeTo('/aweoftheweek')">Altered World Event of the Week</h1>
      <div class="blurb">A Monster of the Week conversion for games specifically interested in the setting of "government agency containing the paranormal" as found in the SCP foundation or the world of Remedy's 2019 game Control.  What's included is a host of retooled playbooks, suggestions for centralizing episodic play around paranormal events instead of monsters, and guides for generating your table's own paranormal agency.</div>
      <br>
      <div class="download"><a href="./aweoftheweek.pdf" target="_blank">Download the PDF</a></div>
      <br>
      <br>

      <h1 class="title clickable" @click="routeTo('/dwplaybooks')">Dungeon World Playbook Template</h1>
      <div class="blurb">Want to create your own Dungeon World playbook?  We created an open source Latex document for quick, painless playbook typesetting. All you have to do is copy and paste the names and descriptions of your moves.  Give it a try!</div>
      <br>
      <div class="download"><a href="https://github.com/rfkeepers/dw-playbooks-tex">Github Repository</a></div>
      <br>
      <br>

      <h1 class="title clickable" @click="routeTo('/dwplaybooks')">Dungeon World Custom Playbooks</h1>
      <div class="blurb">Six custom playbooks for explosive mischief, nightmareish curses, and growing your own undead buddy.</div>
      <br>
      <div class="download">
        <a href="./dwplaybooks/nightwatch">Nightwatch</a> -
        <a href="./dwplaybooks/witch">Witch</a>
      </div>
      <div class="download">
        <a href="./dwplaybooks/monk">Monk</a> -
        <a href="./dwplaybooks/necrogardener">Necrogardener</a>
      </div>
      <div class="download">
        <a href="./dwplaybooks/powdermage">Powdermage</a> -
        <a href="./dwplaybooks/embermancer">Embermancer</a>
      </div>
      <br>
    </div>
  </div>
  <br>
  <hr>
  <br>
</template>

<script>

const home = {
  name: 'Home',
  methods: {
    routeTo(path) {
      this.$emit('routed');
      this.$router.push(path);
    },
  },
};

export default home;
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    align-items: center;
  }
}
</style>