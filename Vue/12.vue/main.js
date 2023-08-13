const App = {
  template: `
    <div class="render">
      <p v-if="isSwitch">123</p>
      <p v-else>456</p>
      <button @click="handleSwitch">Switch</button>
      <p v-show="isSwitch">789</p>
    </div>
  `,
  data() {
    return {
      isSwitch: true,
    };
  },
  methods: {
    handleSwitch() {
      this.isSwitch = !this.isSwitch;
    },
  },
};

export default App;
