<script setup lang="ts">

const pvm: number = new Date().getFullYear()
//toLocaleDateString('fi-Fi', { year:"numeric"}) 
//{ weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

</script>
<template>

<!-- Footer container -->
<footer
  class="font-sans absolute inset-x-0 bottom-0 h-12 bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © {{ pvm }} Copyright: 
    <a target = "_blank" class="text-neutral-800 dark:text-neutral-400" href="https://timohoo.github.io/">
    Timo Hoo
    </a>
  </div>
</footer>

</template>