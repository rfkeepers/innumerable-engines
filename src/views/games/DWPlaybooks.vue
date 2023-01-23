<template>
<div class="dwpbs">
    <h1 class="title">Custom Dungeon World Playbooks</h1>
    <h2 class="subtitle--to"><a href="/dwplaybooks/witch">The Witch</a></h2>
    <div class="blurb--for padBot">Whisper nightmares upon a person.</div>
    <h2 class="subtitle--to"><a href="/dwplaybooks/monk">The Monk</a></h2>
    <div class="blurb--for padBot">Strive towards enlightenment through discipline.</div>
    <h2 class="subtitle--to"><a href="/dwplaybooks/nightwatch">The Nightwatch</a></h2>
    <div class="blurb--for padBot">Protect the streets as a nighttime vigilante duo.</div>
    <h2 class="subtitle--to"><a href="/dwplaybooks/powdermage">The Powdermage</a></h2>
    <div class="blurb--for padBot">Every good team needs a demolitions expert.</div>
    <h2 class="subtitle--to"><a href="/dwplaybooks/necrogardener">The Necrogardener</a></h2>
    <div class="blurb--for padBot">Undead with green thumbs grow rotting gardens.</div>
    <h2 class="subtitle--to"><a href="/dwplaybooks/embermancer">The Embermancer</a></h2>
    <div class="blurb--for">Forge an arsenal with fire, stone, and water.</div>
    <br>
    <br>

    <h1 class="title">Playbook Creation Template</h1>
    <div class="blurb">Do you have an idea for a Dungeon World playbook, but lack experience creating fancy PDF documents?  You're in luck!  The template for all the playbooks is available as a latex document, available for community use <a href="https://github.com/rfkeepers/dw-playbooks-tex">here on github</a>!</div>
    <br>
    <h2 class="subtitle">The Example</h2>
    <div class="download"><a href="/dungeon_world_playbooks/template_playbook_dark.pdf" target="_blank">Dark Mode (for screens)</a></div>
    <br>
    <div class="download"><a href="/dungeon_world_playbooks/template_playbook_light.pdf" target="_blank">Light Mode (for printing)</a></div>
    <br>
    <hr>
    <br>
</div>
</template>

<script>
const dwpbs = { name: 'DungeonWorldPlaybooks' };
export default dwpbs;
</script>

<style scoped lang="scss">
.padBot {
  padding-bottom: 16px;

  @media screen and (max-width: 900px) {
    padding-bottom: 8px;
  }
}
</style>