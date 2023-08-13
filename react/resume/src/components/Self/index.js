import Style from "./style.module.css";

function Self() {
  return (
    <div className={Style.skill}>
      <p>
        <i className={"iconfont icon-pingjia"} />
        <span>自我评价</span>
      </p>
      <ul>
        <li className={Style.indentP}>
          本人踏实、勤奋，严格要求自己，对新事物有较强的接受能力。
          生活中，能够很好地处理好人际关系，善于分享和交流。
          工作中，能够高质量地和团队成员协同完成开发，做事有条理，能做到及时反馈。
          业余时间喜欢探索和学习新技术，关注行业动态，不断挑战和提升自己。
          我期待自己一步步的努力，成为自己想成为的人。
        </li>
      </ul>
    </div>
  );
}
export default Self;
