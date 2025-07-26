<template>
<div>
    <h1>基于Yjs的协同编辑器</h1>
    <div class="editor-container">
      <textarea
        ref="editor"
        name="editor"
        id="editor"
        placeholder="在这里输入内容，和其他标签页进行同步..."
      ></textarea>
      <div class="status">
        <span ref="status" id="currentStatus">等待输入</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Y from 'yjs'
import { onMounted, ref } from 'vue'

const editor = ref<HTMLTextAreaElement | null>(null)
const status = ref<HTMLSpanElement | null>(null)

onMounted(() => {
  const doc = new Y.Doc()
  const text = doc.getText('sharedText')
  const channel = new BroadcastChannel('chatroom')

  let composing = false

  const sync = () => {
    const current = text.toString()
    const inputValue = editor.value!.value

    if (current !== inputValue){
      text.delete(0, current.length)
      text.insert(0, inputValue)
      status.value!.textContent = '被本地编辑中✍️"'
    }
  }

  editor.value!.addEventListener("compositionstart", () => {
      composing = true;
      status.value!.textContent = '被本地编辑中✍️"'
  });

   editor.value!.addEventListener("compositionend", () => {
      composing = false;
      status.value!.textContent = "等待输入";
      sync()  
  });

   editor.value!.addEventListener("input", () => {
    if (!composing) {
      sync()
    };
  });

  doc.on("update", (update) => {
    channel.postMessage(update); 
  });

  channel.addEventListener("message", (event) => {
    Y.applyUpdate(doc, event.data); 
  });

  text.observe(() => {
    if (editor.value?.value !== text.toString()) {
      editor.value!.value = text.toString();
      status.value!.textContent = "正在同步中🔄";
      setTimeout(() => {
        status.value!.textContent = "等待输入";
      }, 1000);
    }
  });

  editor.value!.value = text.toString(); 
})
</script>

<style scoped>
.editor-container {
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  width: 600px;
  max-width: 100%;
  position: relative;
  margin-top: 1rem;
}
textarea {
  width: 100%;
  height: 200px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  resize: none;
  box-sizing: border-box;
}
.status {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
  text-align: right;
}
.status span {
  color: #10b981;
  font-weight: bold;
}
</style>
