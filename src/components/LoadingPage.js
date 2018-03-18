// import React from 'react';
//
// const LoadingPage = () => (
//   <div className="loader">
//     <img className="loader__image" src="/images/loader.gif"/>
//   </div>
// );
//
// export default LoadingPage;

import React, { Component, Children } from 'react'
import { drizzleConnect } from 'drizzle-react'

class Loading extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    if (this.props.web3.status === 'failed')
    {
      return(
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚠️</h1>
              <p>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.</p>
            </div>
          </div>
        </main>
      )
    }

    if (this.props.drizzleStatus.initialized)
    {
      return Children.only(this.props.children)
    }

    return(
      <main className="container loading-screen">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>⚙️</h1>
            <p>Loading dapp...</p>
          </div>
        </div>
      </main>
    )
  }
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  }
}



export default drizzleConnect(Loading, mapStateToProps)
