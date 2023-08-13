const App = {
  name: 'App',
  data() {
    return {
      isActive: true,
      hasError: true,

      classObj: {
        isActive: true,
        hasError: false,
      },

      baseStyles: {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      },
      overridingStyles: {
        backgroundColor: 'green',
      },
    };
  },
  template: `
    <div :class="{active: isActive, 'text-danger': hasError}"></div>
    <div :class="classObj"></div>
    <div :style="[baseStyles, overridingStyles]"></div>
  `,
};

export default App;
