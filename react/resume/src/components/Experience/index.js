import Style from "./style.module.css";

function Experience() {
  return (
    <div className={Style.experience}>
      <p>
        <i className={"iconfont icon-resume-1-copy"} />
        <span>工作经历</span>
      </p>
      <ul>
        <li>
          <span>2020.11 ~ 2021.03</span>
          <span>中软国际有限公司</span>
          <span>中级前端工程师</span>
        </li>
        <li>
          <span>2017.07 ~ 2020.09</span>
          <span>西安博达软件有限公司</span>
          <span>Web前端工程师</span>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
