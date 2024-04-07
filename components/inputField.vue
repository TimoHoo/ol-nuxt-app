<!-- file: inputField.vue -->

<script setup lang="ts">
import { useSearchResultStore } from "~/stores/SearchResultStore"

const searchText = ref('')
const SearchResultStore = useSearchResultStore()

async function executeSearch(hakuTeksti: string) {
  try {
    await SearchResultStore.getResults( hakuTeksti )
  }
  catch (error) {
    alert(error)
    return
  }
}
</script>

<template>
  <UInput
    v-model="searchText" 
    icon="i-heroicons-magnifying-glass-20-solid"
    size="lg"
    color="primary"
    :trailing="true"
    :autofocus="true"
    placeholder="Haku..."
    aria-label="Hakusana..."
    autocomplete="off"
    :ui="{ icon: { trailing: { pointer: '' } } }"
    @keyup.enter="executeSearch(searchText)"
  >
  <template #trailing>
      <UButton
        v-show="searchText !== ''"
        color="gray"
        variant="link"
        icon="i-heroicons-x-mark-20-solid"
        :padded="false"
        @click="searchText = ''"
        />
  </template>
  </UInput>
  <slot></slot>

</template>