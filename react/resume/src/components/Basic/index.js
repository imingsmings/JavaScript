import Style from "./style.module.css";

function BasicInfo() {
  return (
    <div className={Style.basic}>
      <p className={Style.name}>王晓明</p>
      <p className={Style.position}>
        <span>
          <strong>求职意向:&nbsp;Web前端工程师</strong>
        </span>
      </p>
      <ul>
        <li>男</li>&nbsp;&nbsp;|&nbsp;&nbsp;
        <li>27岁</li>&nbsp;&nbsp;|&nbsp;&nbsp;
        <li>19929058026</li>&nbsp;&nbsp;|&nbsp;&nbsp;
        <li>imings@qq.com</li>
      </ul>
    </div>
  );
}

export default BasicInfo;
