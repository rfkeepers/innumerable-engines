<template>
  <div class="home">
    <div class="section">
      <div>This site is still in progress.  You can find the games and supplements I've released below.</div>
      <br>

      <h1 class="section__title" @click="routeTo('/aweoftheweek')">Altered World Event of the Week</h1>
      <div class="section__blurb">A Monster of the Week conversion for games specifically interested in the setting of "government agency containing the paranormal" as found in the SCP foundation or the world of Remedy's 2019 game Control.  What's included is a host of retooled playbooks, suggestions for centralizing episodic play around paranormal events instead of monsters, and guides for generating your table's own paranormal agency.</div>
      <br>
      <div class="section__download"><a href="./aweoftheweek.pdf" target="_blank">Download the PDF</a></div>
      <br>
      <br>

      <h1 class="section__title" @click="routeTo('/dwplaybooks')">Dungeon World Playbook Template</h1>
      <div class="section__blurb">Want to create your own Dungeon World playbook?  We created an open source Latex document for quick, painless playbook typesetting. All you have to do is copy and paste the names and descriptions of your moves.  Give it a try!</div>
      <br>
      <div class="section__download"><a href="https://github.com/rfkeepers/dw-playbooks-tex">Github Repository</a></div>
      <br>
      <br>

      <h1 class="section__title" @click="routeTo('/dwplaybooks')">Dungeon World Custom Playbooks</h1>
      <div class="section__blurb">Six custom playbooks for explosive mischief, nightmareish curses, and growing your own undead buddy.</div>
      <br>
      <div class="section__download">
        <a href="./dwplaybooks/nightwatch">Nightwatch</a> -
        <a href="./dwplaybooks/witch">Witch</a>
      </div>
      <div class="section__download">
        <a href="./dwplaybooks/monk">Monk</a> - 
        <a href="./dwplaybooks/necrogardener">Necrogardener</a>
      </div>
      <div class="section__download">
        <a href="./dwplaybooks/powdermage">Powdermage</a> -
        <a href="./dwplaybooks/worldsmith">Worldsmith</a>
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

.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    position: relative;
    color: $color-text;
    cursor: pointer;

    @media screen and (max-width: 900px) {
      width: 85%;
      text-align: center;
    }

    @media screen and (min-width: 900px) {
      &:after {
        content: "";
        display: block;
        width: 128px;
        height: 1px;
        background: $color-foreground;
        right: -144px;
        top: 50%;
        position: absolute;
      }

      &:before {
        content: "";
        display: block;
        width: 136px;
        height: 1px;
        background: $color-foreground;
        left: -152px;
        top: 50%;
        position: absolute;
      }
    }
  }

  &__download {
    font-size: 1.5em;
  }

  &__blurb {
    text-align: center;
  }

}
</style>