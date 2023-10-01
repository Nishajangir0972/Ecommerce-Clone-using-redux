import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Ecommerce/App'
import store from './Ecommerce/store.jsx'
import { Provider } from 'react-redux'
import './Ecommerce/App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
