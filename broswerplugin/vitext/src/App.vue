<script setup lang="ts">
const sendMessage = () => {
  chrome.tabs.query({ active:  true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0]

    if (!activeTab) return

    chrome.tabs.sendMessage(activeTab.id!, {
      message: 'hello'
    })
  })
}
</script>

<template>
  <div>
    <button class="btn" @click="sendMessage">Send</button>
  </div>
</template>

<style scoped>

</style>
