import { createStore } from 'vuex';

const moduleCounter = {
    state: () => ({
        count: 0
    }),
    mutations: {
        add: (state) => state.count ++,
        minus: (state) => state.count --
    }
}

const moduleTitle = {
    state: () => ({
        text: ''
    }),
    mutations: {
        setTitle: (state) => {
            const arr = ['我是一个人', '我是一名老师', '我是一名医生'];
            state.text = arr[Math.floor(Math.random() * arr.length)];
        }
    }
}

const storagePlugin = (store) => {
    // store.subcribe((_, state) => {
    //    localStorage.setItem('vuex-storage', JSON.stringify(store.state));
    // })

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('vuex-storage', JSON.stringify(store.state));
    }, false);

    const vuexStorage = localStorage.getItem('vuex-storage');

    if (!vuexStorage) return;

    try {
        store.replaceState(JSON.parse(vuexStorage));
    } catch (e) {
        console.log(e.message);
    }
}

const store = createStore({
    modules: {
        counter: moduleCounter,
        title: moduleTitle
    },
    plugins: [storagePlugin]
});

export default store;