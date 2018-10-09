import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import Routes from './router/index'
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
