const App = {
  name: 'App',
  template: `
  <div>
    <img
      src="https://www.apple.com.cn/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13__ej8lu6qtsdw2_medium_2x.jpg"
      alt=""
      width="150"
      v-if="isShowImg1"
    />
    <img
      src="https://www.apple.com.cn/v/iphone-13-pro/g/images/key-features/compare/compare_iphone_13_pro__ezrebuldmju6_medium_2x.jpg"
      alt=""
      width="150"
      v-show="isShowImg2"
    />
    <p>
      <button @click="setImgStatus(1)">切换1</button>
      <button @click="setImgStatus(2)">切换2</button>
    </p>
  </div>
  `,
  data() {
    return {
      isShowImg1: false,
      isShowImg2: false,
    };
  },
  methods: {
    setImgStatus(type) {
      this[`isShowImg${type}`] = !this[`isShowImg${type}`];
    },
  },
};

export default App;
