const App = {
  template: `
    <div>
      <p>
        <input type="text" v-model="text"/>
      </p>
      <p>
        <select v-model="value">
          <option value="" disabled>请选择</option>
          <option value="China">中国</option>
          <option value="Russia">俄罗斯</option>
          <option value="UK">英国</option>
        </select>
      </p>
      <p>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      
      </p>
      <p>
      {{ toggle }}
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no" 
      />
      </p>
      <p>
        {{ picked }}
        <input type="radio" v-model="picked" :value="first"/>
        <input type="radio" v-model="picked" :value="second"/>
      </p>
      <p>
       {{ selected }}
        <select v-model="selected">
        <option value="" disabled>请选择</option>
          <option :value="{ number: optValue1 }">123</option>
          <option :value="{ age: 456 }">456</option>
        </select>
      </p>
      <p> 
        {{ msg }}
        <input type="text" v-model.lazy="msg"/>
      </p>
      <p> 
        {{ age }}
        <input v-model.number.lazy="age"/>
        <input v-model.lazy="age" type="number"/>
      </p>
      <p>
        {{ message.length }}
        <input type="text" v-model.trim="message" />
      </p>
        <p>
          {{ value1 }}
          <input type="text" v-model="value1"/>
        </p>
        <p>
          {{ value2 }}
          <input type="text" @change="setValue2"/>
        </p>
    </div>
  `,
  data() {
    return {
      text: '123',
      value: '',
      checkedNames: [],
      toggle: 'yes',
      picked: '1',
      first: '1',
      second: '2',
      selected: '',
      optValue1: 123,
      optValue2: 456,
      msg: '',
      age: '',
      message: '',
      value1: '',
      value2: '',
    };
  },
  watch: {
    checkedNames(newValue) {
      console.log(newValue);
    },
    selected(newValue) {
      console.log(newValue);
    },
  },
  methods: {
    setValue2(e) {
      console.log(e.target.value);
      this.value2 = e.target.value;
    },
  },
};

export default App;
