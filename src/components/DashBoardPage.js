import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { drizzleConnect } from 'drizzle-react'
import { ContractData, ContractForm } from 'drizzle-react-components'
import { Container, Row, Col } from 'reactstrap';


class Home extends Component {
  constructor(props, context) {
    super(props)

    this.web3 = context.drizzle.web3
    this.contracts = context.drizzle.contracts
  }

  render() {

    return (
      <Container className="text-center">
        <Row>
          <Col md="12">
            <p><strong>Add things to your app. </strong></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

Home.contextTypes = {
  drizzle: PropTypes.object
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage
  }
}

export default drizzleConnect(Home, mapStateToProps)
