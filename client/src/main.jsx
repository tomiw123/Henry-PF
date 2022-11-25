import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthProvider} from "./contex/auth";
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
