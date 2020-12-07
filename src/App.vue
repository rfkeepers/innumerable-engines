<template>
  <div id="innumerable-engines" class="shell">
    <div class="shell__title">Innumerable Engines</div>
    <div
      class="shell__nav-button"
      @click="linksShowing = !linksShowing"  
    >&#9776;</div>
    <div class="shell__links" v-if="linksShowing">
      <NavDropdown
        @routed="hideNavs"
        name="Games"
        :links="gameLinks"
      ></NavDropdown>
      <div class="shell__links__spacer">|</div>
      <NavDropdown
        name="This Site"
        :links="siteLinks"
      ></NavDropdown>
    </div>
  </div>
  <router-view class="view"></router-view>
</template>

<script>
import NavDropdown from '@/components/NavDropdown.vue'

export default {
  name: "App",
  data() { return {
    linksShowing: matchMedia("screen and (min-width: 900px)").matches,
    siteLinks: [
      {to: "/", text: "Home"},
      {to: "/feedback", text: "Feedback"},
    ],
    gameLinks: [
      {to: "/aweoftheweek", text: "AWE of the Week"},
    ],
  }; },
  created() {},
  mounted() { window.addEventListener('resize', this.onResize); },
  beforeUnmount() { window.removeEventListener('resize', this.onResize); },
  methods: {
  onResize() { this.linksShowing = matchMedia("screen and (min-width: 900px)").matches; },
  hideNavs() { this.linksShowing = !matchMedia("screen and (max-width: 900px)").matches; }
  },
  components: {
    NavDropdown,
  },
};
</script>

<style lang="scss">
.shell {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss" scoped>
  .shell {
    padding: 0.67em 1.5em 1em 1.5em;
    background: $color-background-sink;
    display: grid;
    border-bottom: 2px solid $color-foreground-sunk;

    @media screen and (max-width: 900px) {
      grid-template-columns: max-content auto max-content;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "title . navBtn"
        "subtitle . ."
        "nav nav nav";
    }

    @media screen and (min-width: 900px) {
      grid-template-columns: max-content max-content auto max-content;
      grid-template-rows: auto;
      grid-template-areas:
        "title subtitle . nav";
      padding-left: 15%;
      padding-right: 15%;
    }

    &__links {
      grid-area: nav;
      display: flex;

      @media screen and (max-width: 900px) {
        flex-direction: column;
        width: 100%;
      }
      @media screen and (min-width: 900px) {
        text-indent: 0.5em;
        align-self: end;
      }

      &__spacer {
        text-indent: 16px;
        @media screen and (max-width: 900px) {
          display: none;
        } 
      }
    }

    &__nav-button {
      grid-area: navBtn;
      align-self: end;
      font-size: 20pt;
      margin-top: 4px;
      @media screen and (min-width: 900px) {
        display: none;
      }
      @media screen and (max-width: 900px) {
        display: visible;
      }
    }

    &__title {
      color: $color-text-pop;
      grid-area: title;
      font-size: 2em;
      @media screen and (min-width: 900px) {
        text-indent: 0.5em;
        align-self: end;
      }
    }

    &__version {
      grid-area: subtitle;
      font-size: 16px;
      color: $color-background-pop;
      text-indent: 0.5em;
      @media screen and (min-width: 900px) {
        align-self: end;
      }
    }
  }

  .view {
    margin: 1em 2em 0 2em;
    text-align: justify;

    @media screen and (min-width: 900px) {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
</style>