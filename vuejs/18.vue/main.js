const MyUser = {
  template: `
    <p style="float:left">
      <a href="">Sign In | </a>
      <a href="">Sign Out</a>
    </p>
  `,
};

const NavItem = {
  props: ['navItem'],
  template: `
    <li style="list-style:none;float:left;margin-right:10px">
      <a :href="navItem.link">{{ navItem.title }}</a>
    </li>
  `,
};

const MyNav = {
  components: {
    NavItem,
  },
  props: ['navData'],
  template: `
    <ul style="float: left; padding: 0 20px;margin:0;list-style: none">
      <nav-item v-for="item of navData" :nav-item="item" :key="item.id"/>
    </ul>
  `,
  mounted() {
    console.log(this);
  },
};

const MyLogo = {
  template: `
    <div style="float: left; padding: 0 20px">
      <img 
        src="https://www.apple.com.cn/favicon.ico" 
        alt="Apple" 
        width=40
        height=40
      />
    </div>
  `,
};

const MyHeader = {
  components: {
    MyLogo,
    MyNav,
    MyUser,
  },
  props: ['navData'],
  template: `
    <header>
      <my-logo />
      <my-nav :nav-data="navData"/>
      <my-user />
    </header>
  `,
};

const App = {
  // 组件的局部注册
  components: {
    MyHeader,
    MyLogo,
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: 'Baidu',
          link: 'https://www.baidu.com',
        },
        {
          id: 2,
          title: 'Google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  template: `
      <my-header :nav-data="navData"/>
  `,
};

export default App;
