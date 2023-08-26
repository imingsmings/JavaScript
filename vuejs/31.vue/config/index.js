import Home from '../components/Home.vue';
import About from '../components/About.vue';
import List from '../components/List.vue';

export const tabConfig = {
  initial: 'home',
  panes: [
    {
      key: 'home',
      title: 'Home',
      component: Home,
    },
    {
      key: 'about',
      title: 'About',
      component: About,
    },
    {
      key: 'list',
      title: 'List',
      component: List,
    },
  ],
};
