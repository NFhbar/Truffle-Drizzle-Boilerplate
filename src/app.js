//React
import React from 'react'
import ReactDOM from 'react-dom'
//Providers
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'
//Router
import AppRouter from './routers/AppRouter'
//Store
import configureStore from './store/configureStore'
//Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import LoadingPage from './components/LoadingPage'
//Contracts
import SimpleStorage from '../build/contracts/SimpleStorage.json'


//Configure Store
const store = configureStore()

// Set Drizzle options.
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    SimpleStorage
  ],
  events: {
    StorageSet: ['_message']
  }
}

const jsx = (
  <DrizzleProvider options={options}>
    <Provider store={store}>
      <LoadingPage>
        <AppRouter />
      </LoadingPage>
    </Provider>
  </DrizzleProvider>
)

ReactDOM.render(jsx, document.getElementById('app'))
