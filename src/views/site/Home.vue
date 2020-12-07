<template>
  <div class="home">
    <div class="section">
      <div>This site is still in progress.  You can find the games and supplements I've released below.</div>
      <h1 class="section__title">Altered World Event of the Week</h1>
      <div>A Monster of the Week derivative aimed at providing players a game environment to match SCP themes and the world of Remedy's 2019 game Control.</div>
      <div>View the pdf <a href="./aweoftheweek.pdf" target="_blank">HERE</a>.</div>
    </div>
  </div>
</template>

<script>

const home = {
  name: 'Home',
  components: {}
}

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
}
</style>