import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
createApp(App).mount('#app')

// import Quill from 'quill'
// import QuillCursors from 'quill-cursors'
// import * as Y from 'yjs'
// import { WebsocketProvider } from 'y-websocket'
// import { QuillBinding } from 'y-quill'

// import 'quill/dist/quill.snow.css'

// Quill.register('modules/cursors', QuillCursors)

// const quill = new Quill(document.querySelector('#app') as HTMLDivElement, {
//   modules: {
//     cursors: true,
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ['bold', 'italic', 'underline', 'strike'],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       ['link', 'image', 'video']
//     ],
//     history: {
//       userOnly: true
//     }
//   },
//   placeholder: 'Please input content here.',
//   theme: 'snow'
// })

// const ydoc = new Y.Doc()

// const ytext = ydoc.getText('quill')

// const provider = new WebsocketProvider('ws://localhost:1234', 'quill-demo-room', ydoc)

// new QuillBinding(ytext, quill, provider.awareness)

// import * as Y from 'yjs'

// const doc = new Y.Doc()
// // 共享Map类型的数据
// const profile = doc.getMap('profile')

// // 设置一个属性
// profile.set('name', 'Alice')
// // 设置另一个属性
// profile.set('age', 30)
// // 设置第三个属性
// profile.set('address', '123 Main St')
// // 输出当前的profile对象
// console.log('profile:', profile.toJSON())

// const doc2 = new Y.Doc()
// // 共享Map类型的数据
// const profile2 = doc2.getMap('profile')
// // 输出当前的profile对象
// console.log('同步之前的profile2:', profile2.toJSON())

// // 数据同步
// const update = Y.encodeStateAsUpdate(doc)
// Y.applyUpdate(doc2, update)
// console.log('同步之后的profile2:', profile2.toJSON())
