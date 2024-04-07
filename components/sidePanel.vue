<!-- file: sidePanel.vue -->

<script setup lang="ts">

const target = ref<HTMLElement | undefined>(undefined)

const isOpen = useSidePanelisOpen()
const hideSlidepanel = (): void => { isOpen.value = false }

</script>

<template>
<div class="inset-0 flex items-top justify-right">

  <USlideover ref="target" v-model="isOpen">
    <UCard
    class="flex flex-col flex-1"
    :ui="{
      base: '',
      ring: '',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
      footer: { padding: 'p-4' }
    }"
    >
    <div class="z-20 absolute top-10 right-1">
      <UButton @click="hideSlidepanel()"> Sulje </UButton>
    </div>

    <slot></slot>

    <template #footer>
      <AppFooter class="h-8" />
    </template>
    </UCard>
  </USlideover>
</div>

</template>