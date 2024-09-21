import { createPinia, defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounter = defineStore('counter', () => {
    const count = ref(0);

    const add = () => count.value ++;
    const minus = () => count.value --;

    return {
        count,
        add,
        minus
    }
});

export const useTitle = defineStore('title', () => {
    const text = ref('');

    const setTitle = () => {
        const arr = ['我是一个人', '我是一名老师', '我是一名医生'];
        text.value = arr[Math.floor(Math.random() * arr.length)];
    }

    return {
        text,
        setTitle
    }
});

const piniaStorage = (context) => {
   const { store } = context;
   const key = `pinia-storage:${ store.$id }`;

   window.addEventListener('beforeunload', () => {
      localStorage.setItem(key, JSON.stringify(store.$state));
   }, false);

   const piniaStorage = localStorage.getItem(key);
   
   if (!piniaStorage) return;

   try {
    store.$patch(JSON.parse(piniaStorage));
   } catch (e) {
    console.log(e.message);
   }
}

const pinia = createPinia();
pinia.use(piniaStorage);

export default pinia;