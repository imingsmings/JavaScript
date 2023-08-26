<template>
  <div class="step-container">
    <div class="step-header">
      <div class="step-label">标签位置</div>
      <div class="step-box">
        <div
          v-for="item of stepList"
          :key="item.step"
          :class="setClassName(item)"
        >
          <div class="step-title" @click="handleStep(item)">
            <span class="filled-btn" v-show="item.step < currentStep">
              <a-icon type="check-circle" />
            </span>
            <span class="step-num" v-show="item.step >= currentStep">{{
              item.step
            }}</span>
            <span>{{ item.title }}</span>
          </div>
          <div class="step-line" v-if="item.step < stepList.length">
            <div class="step-line-inner"></div>
          </div>
        </div>
      </div>
      <div class="next">
        <button @click="handleNextStep">下一步</button>
      </div>
    </div>
    <div class="step-content">
      <keep-alive>
        <Transition name="step" mode="out-in">
          <component :is="currentContent" />
        </Transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Step1 from './step1.vue';
// import Step2 from './step2.vue';
import Step2 from '../table/FoldTableAdvanced.vue';
// import Step3 from './step3.vue';
import Step3 from '../table/FoldTablePro.vue';
// import Step4 from './step4.vue';
import Step4 from '../table/FoldTableMax.vue';
import Step5 from './step5.vue';
export default {
  name: 'Step',
  data() {
    return {
      currentStep: 1,
      stepList: [
        {
          step: 1,
          title: '基本参数基本参数',
          content: Step1,
        },
        {
          step: 2,
          title: '配置报价',
          content: Step2,
        },
        {
          step: 3,
          title: '折扣修改',
          content: Step3,
        },
        {
          step: 4,
          title: '配置参数确认',
          content: Step4,
        },
        {
          step: 5,
          title: '导出&提交',
          content: Step5,
        },
      ],
    };
  },
  computed: {
    currentContent() {
      return this.stepList.find((item) => item.step === this.currentStep)
        .content;
    },
  },
  methods: {
    setClassName(item) {
      return {
        'step-item': true,
        'flex-2': item.step < this.stepList.length,
        active: item.step === this.currentStep,
        filled: item.step < this.currentStep,
      };
    },
    handleNextStep() {
      if (this.currentStep < this.stepList.length) {
        this.currentStep++;
      }
    },
    handleStep(item) {
      if (item.step < this.currentStep || item.step - this.currentStep == 1) {
        this.currentStep = item.step;
      }
    },
  },
};
</script>

<style scoped>
.step-header {
  display: flex;
  flex-direction: row;
  background-color: antiquewhite;
  align-items: center;
}
.step-header .step-label,
.step-header .next {
  flex: 1;
  text-align: center;
}
.step-header .step-box {
  flex: 6;
  display: flex;
  flex-direction: row;
  background-color: antiquewhite;
}
.step-header .step-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.step-header .step-item .step-line .step-line-inner {
  height: 1px;
  width: 0px;
  transition: all 0.5s linear;
}
.step-header .step-item.filled .step-line .step-line-inner {
  background-color: red;
  width: 100%;
  /* transition: all 0.5s linear; */
  /* transition: all 0.5s cubic-bezier(0.42, 0, 1, 1); ease-in */
  /* transition: all 0.5s cubic-bezier(0, 0, 0.58, 1); */
  transition: all 0.5s ease;
}
.step-header .step-item .step-line {
  background-color: #ccc;
  flex: 1 1 auto;
  margin: 0 10px;
  height: 1px;
}
.step-header .step-item .step-title .step-num,
.step-header .step-item .step-title .filled-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
}
.step-header .step-item .step-title .filled-btn {
  color: red;
}
.step-header .step-item .step-title .step-num {
  border-radius: 50%;
  background-color: aqua;
  line-height: 20px;
  color: #fff;
}
.step-header .step-item.flex-2 {
  flex: 2 1 auto;
}
/*
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.step-enter-active {
  transition: all 0.5s ease-in;
}

.step-leave-active {
  transition: all 0.5s ease-out;
}

.step-enter-from,
.step-leave-to {
  opacity: 0;
}
</style>
