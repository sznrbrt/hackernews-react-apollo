import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'


const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6nh16qv1ao00143ya4qtz5n'
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()
