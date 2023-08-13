const data = {
  a: 1,
  b: {
    c: 2,
  },
  d: [1, 2, 3, 4, 5],
};

const $data = reactive(data);

console.log($data.b.c);

function reactive(data) {
  return new Proxy(data, {
    get(target, key) {
      console.log('get', key);
      // return Reflect.get(target, key);
      const value = Reflect.get(target, key);
      return typeof value === 'object' && value !== null
        ? reactive(value)
        : value;
    },
    set(target, key, value) {
      return Reflect.set(target, key, value);
    },
  });
}

/**
 * Proxy不用逐个属性的定义getter/setter函数
 * Proxy的实例是针对原对象的一个代理对象
 *
 * 1. Vue2和Vue3的响应式原理
 * 2. ref -> 组件和元素
 * 3. setup -> return -> template需要的变量、JSX、h函数执行(虚拟节点)
 *
 * reactive -> Proxy API
 * ref与状态更新，DOM更新的时机
 * DOM更新和状态的改变是非同步，把DOM更新的任务缓存到一个队列当中，等待状态全部改变完以后一次性更新
 *
 * nextTick在状态更改完成以后立即执行, 等待DOM更新完毕后, 执行回调函数
 *
 * reactive
 * 1. 深层响应式
 * 2. 代理对象与原对象不是同一个引用
 * 3. reactive包装后的的对象再次被包装,会返回第一次包装的代理对象
 * 4. reactive只针对Array、Map、Set、Object
 *    (JS中没有一个针对所有的值有一个统一处理引用值的方式，原始值没办法让其有引用值的特性, 包装类包装后会多一层)
 * 5. 重新赋值对象后会失去响应式, 需要在同一个代理对象中
 * 6. 解构将丧失响应式
 *
 * isReactive 判断一个是对象是否是reactive包装后的对象
 *
 * shallowReactive
 *  浅层响应式, 只对第一层属性做响应式处理
 *
 * ref 让所有值有引用的操作模型 Reference implement
 * 1. 针对所有值的定制化的引用包装, 保证响应式的同时还可以进行响应式的操作
 * 2. 深层响应式
 *
 * shallowRef 浅层响应式
 *
 * isRef 是否是ref包装后的对象
 *
 * toRef toRefs
 * 1. 将对象的属性转换为ref对象
 * 2. toRef($data, attrName), toRefs($data)
 * 3. 同步reactive的响应式
 * 4. state -> _object
 *
 * 自动解包
 * 1. 响应式数据的属性是ref包装后的对象, 会自动解包, 并且同步响应式
 * 2. state.xxx -> state.xxx.value
 *
 * unref 解包
 * 1. 丧失引用, 得到代理数据
 *
 * toRaw 得到普通对象
 */
