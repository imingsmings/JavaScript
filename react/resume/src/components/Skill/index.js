import Style from "./style.module.css";

function Skill() {
  return (
    <div className={Style.skill}>
      <p>
        <i className={"iconfont icon-zhuanyezhishijineng"} />
        <span>专业技能</span>
      </p>
      <ul>
        <li>熟悉HTML5、CSS3、JavaScript及ES5+新特性</li>
        <li>熟悉React、Vue.js及其生态，能快速运用相关技术完成开发</li>
        <li>熟悉Webpack打包工具，有Node.js及TypeScript项目经验</li>
        <li>熟悉Ant Design、ElementUI、Bootstrap等前端组件库</li>
        <li>对前端模块化、工程化及性能优化有一定的了解</li>
        <li>具备一定的英文读写能力</li>
      </ul>
    </div>
  );
}
export default Skill;
