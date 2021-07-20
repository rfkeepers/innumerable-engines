<template>
<div class="dwpbs">
    <h1 class="title">Custom Dungeon World Playbooks</h1>
    <h2 class="subtitle"><a href="/dwplaybooks/witch">The Witch</a></h2>
    <div class="blurb">Whisper a nightmareish curse against your foe.</div>
    <h2 class="subtitle"><a href="/dwplaybooks/monk">The Monk</a></h2>
    <div class="blurb">Find enlightenment through discipline.</div>
    <h2 class="subtitle"><a href="/dwplaybooks/nightwatch">The Nightwatch</a></h2>
    <div class="blurb">Protect the streets as a nighttime vigilante.</div>
    <h2 class="subtitle"><a href="/dwplaybooks/powdermage">The Powdermage</a></h2>
    <div class="blurb">Every good team needs a demolitions expert.</div>
    <h2 class="subtitle"><a href="/dwplaybooks/necrogardener">The Necrogardener</a></h2>
    <div class="blurb">Undead with green thumbs grow rotting gardens.</div>
    <h2 class="subtitle"><a href="/dwplaybooks/worldsmith">The Worldsmith</a></h2>
    <div class="blurb">Forge an arsenal with fire, stone, and water.</div>
    <br>
    <br>

    <h1 class="title">Playbook Creation Template</h1>
    <div class="blurb">Have an idea for a Dungeon World playbook, but no experience creating fancy PDF documents?  You're in luck!  All the playbooks on this page were created with our open-source latex document, available for community use <a href="https://github.com/rfkeepers/dw-playbooks-tex">here on github</a>.  We designed it while keeping developers with little experience (or little time) in mind.  With all the nitty-gritty formatting abstracted away, a switchable light/dark mode for printable vs screen-viewed pdfs, and in-document comments guiding you through the process, all you need to do to create your own playbook is plug in the moves!</div>
    <br>
    <h2 class="subtitle">The Example</h2>
    <div class="download"><a href="./template_playbook_dark.pdf" target="_blank">Dark Mode (for screens)</a></div>
    <br>
    <div class="download"><a href="./template_playbook_light.pdf" target="_blank">Light Mode (for printing)</a></div>
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
.dwpbs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>