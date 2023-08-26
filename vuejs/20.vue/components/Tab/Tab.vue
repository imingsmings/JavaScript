<template>
  <div class="tab">
    <tab-search
      :search-value="tabData.searchValue"
      @changeSearch="changeSearch"
    />
    <tab-nav
      :nav-data="pageNavData"
      :initialIndex="tabData.initialIndex"
      @changeIndex="changeIndex"
    />
    <tab-content
      :nav-content="pageContentData"
      :initialIndex="tabData.initialIndex"
    />
  </div>
</template>

<script>
import TabSearch from './children/TabSearch.vue';
import TabNav from './children/TabNav.vue';
import TabContent from './children/TabContent.vue';
export default {
  name: 'Tab',
  components: {
    TabSearch,
    TabNav,
    TabContent,
  },
  data() {
    return {
      tabData: {
        initialIndex: 0,
        searchValue: '',
        data: [
          {
            id: 1,
            navTitle: 'nav-1',
            title: 'Title-1',
            content: 'Content-1',
          },
          {
            id: 2,
            navTitle: 'nav-2',
            title: 'Title-2',
            content: 'Content-2',
          },
          {
            id: 3,
            navTitle: 'nav-3',
            title: 'Title-3',
            content: 'Content-3',
          },
          {
            id: 4,
            navTitle: 'nav-4',
            title: 'Title-4',
            content: 'Content-4',
          },
        ],
      },
    };
  },
  methods: {
    changeIndex(index) {
      this.tabData.initialIndex = index;
      this.tabData.searchValue = '';
    },
    changeSearch(value) {
      this.tabData.searchValue = value;
      if (!value) return;
      this.tabData.data.forEach((item, index) => {
        if (item.navTitle.includes(value) || item.content.includes(value)) {
          this.tabData.initialIndex = index;
        }
      });
    },
  },
  computed: {
    pageNavData() {
      return this.tabData.data.map((item) => {
        return {
          id: item.id,
          navTitle: item.navTitle,
        };
      });
    },
    pageContentData() {
      return this.tabData.data.map((item) => {
        return {
          title: item.title,
          content: item.content,
        };
      });
    },
  },
};
</script>

<style lang="scss">
.tab {
  width: 400px;
  height: 300px;
  margin: 50px auto;
  border: 1px solid #ccc;
}
</style>
