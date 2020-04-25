## redux相关技术库
redux, react-redux, react-router-redux, redux-actions
Redux 提供createStore这个函数，用来生成 Store。

### action 和 action创建函数
action是一个js普通对象，用来描述发生了什么,action创建函数就是一个返回action对象的函数。
~~~
const ACTION_DEMO = 'acdemo';
const Data = {};
const action = {type: ACTION_DEMO, payload: Data}
//一个action对象包好一个必须的type属性,可以有附加数据

const actionCreator = (params) => action
~~~

### reducers
reducer 只是一个接收 state 和 action，并返回新的 state 的函数
~~~
export function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}
~~~

### 合成reducer
~~~
import { combineReducers } from 'redux'
import * as reducers from './reducers'

//合并reducers,combineReducers返回一个函数
const reducer = combineReducers(reducers);

//创建store
import { createStore } from 'redux'

//createStore函数接受另一个函数作为参数，返回新生成的Store对象
const Store = createStore(reducer);
~~~

### connect
connect方法声明：
~~~
connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])
~~~
作用：连接React组件与 Redux store
~~~
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import actions from '../actions/counter';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args))
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
~~~
