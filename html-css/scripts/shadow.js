// const template = document.getElementById("tabbed-custom-element");

// globalThis.customElements.define(template.id, class extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content);

//     let tabs = [];
//     let children = this.shadowRoot.children;

//     for(let elem of children) {
//       if(elem.getAttribute('part')) {
//         tabs.push(elem);
//       }
//     }

//     tabs.forEach((tab) => {
//       tab.addEventListener('click', (e) => {
//         tabs.forEach((tab) => {
//           tab.part = 'tab';
//         })
//         e.target.part = 'tab active';
//       })
//     })
//   }
// });

globalThis.customElements.define('my-button', class extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <button part="btn">click</button>
        `
    }
}) 

globalThis.customElements.define('my-component', class extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <my-button exportparts="btn"></my-button>
        `
    }
}) 