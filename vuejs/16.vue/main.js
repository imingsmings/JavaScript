const App = {
  template: `
    <div>
      <p>{{ count }}</p>
      <button @click="count++">Add</button>
      <button @click="count--">Minus</button>
    </div>
    <div>
      <p>{{ count }}</p>
      <button @click="handleAdd">Add</button>
      <button @click="handleMinus">Minus</button>
    </div>
    <div>
      <p>{{ count }}</p>
      <button @click="handleAdd(2)">Add</button>
      <button @click="handleMinus(3)">Minus</button>
    </div>
    <div>
      <p>{{ count }}</p>
      <button @click="handleAdd(2,$event)">Add</button>
      <button @click="handleMinus(3)">Minus</button>
    </div>
    <div>
      <p>{{ count }}</p>
      <button @click="handleAdd(1),setLog()">Add</button>
      <button @click="handleMinus(3)">Minus</button>
    </div>
    <div>
      <input @keydown.enter="handleEnter" />
      <button @click.ctrl="handleCtrl">Btn</button>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleAdd(step, e) {
      this.count += step;
    },
    handleMinus(step) {
      this.count -= step;
    },
    setLog() {
      console.log('Print log');
    },
    handleEnter(e) {
      console.log(e);
    },
    handleCtrl(e) {
      console.log(e);
    },
  },
};

export default App;
