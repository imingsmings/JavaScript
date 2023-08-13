import Style from './style.module.css';
function Evaluation() {
    return (
        <div className={Style.evaluation}>
            <p><i className={'iconfont icon-jiaoyu'}/><span>教育经历</span></p>
            <p className={Style.content}>
               2013.8 ~ 2017.7&nbsp;&nbsp;|&nbsp;&nbsp;
               西安理工大学&nbsp;&nbsp;|&nbsp;&nbsp; 
               一类本科&nbsp;&nbsp;|&nbsp;&nbsp;
               信息与计算科学
            </p>
        </div>
    );
}

export default Evaluation;
