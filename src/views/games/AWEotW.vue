<template>
<div class="aweotw">
    <h1 class="aweotw__title">Altered World Event of the Week</h1>
    <div class="aweotw__blurb">A Monster of the Week conversion for games specifically interested in the setting of "government agency containing the paranormal" as found in the SCP foundation or the world of Remedy's 2019 game Control.  What's included is a host of retooled playbooks, suggestions for centralizing episodic play around paranormal events instead of monsters, and guides for generating your table's own paranormal agency.</div>
    <br>
    <div class="aweotw__download"><a href="./aweoftheweek.pdf" target="_blank">Download the PDF</a></div>
    <div class="aweotw__changelog">
      <h2>Changelog:</h2>
      <div>2020.12.27:</div>
      <div>Typo fix on the Psychic playbook, referring to the Director when it shouldn't.</div>
      <br>
      <div>2020.12.05:</div>
      <div>Beta Release</div>
    </div>
</div>
</template>

<script>
const aweotw = { name: 'AWEoftheWeek' };
export default aweotw;
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    align-items: center;
  }
}

.aweotw {
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

  &__download {
    font-size: 1.5em;
  }

  &__blurb {
    text-align: center;
  }

  &__changelog {
    margin-top: 24px;
    text-align: left;
    width: 100%;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: $color-text;
      position: relative;
      top: 8px;
    }

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: $color-text;
      position: relative;
      top: 8px;
    }
  }


}
</style>