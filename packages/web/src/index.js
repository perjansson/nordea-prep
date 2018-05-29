import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './style/style.css'
import './style/bootstrap/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('hostElement'))
