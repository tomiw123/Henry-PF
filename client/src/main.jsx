import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthProvider} from "./context/auth";
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
      </BrowserRouter>
    </Provider>

)
