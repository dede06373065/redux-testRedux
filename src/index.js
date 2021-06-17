import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    /* 用provider让所有APP后代组件都可以接收到store*/
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))

