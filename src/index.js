import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Common/Header'
import App from './containers/App'
import Footer from './components/Common/Footer'
import './scss/style.css'
import { Provider } from 'react-redux'
import {store} from "./features/store"

ReactDOM.render(
  <div className='p-5 sm:p-4 sm:container flex flex-col h-screen justify-between'>
    <Header/>
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
    <Footer/>
  </div>,
  document.getElementById('root')
);