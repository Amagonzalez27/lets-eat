import React, { Component } from 'react';
import styled from 'styled-components';

const CustomerList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: auto;
`;

const List = styled.li`
  font-size: 1.3rem;
  line-height: 2rem;
  border-bottom: 1px dotted #777;
`;

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }));
  }

  render() {
    return (
      <div>
        <h3>Customers</h3>
        <CustomerList>
          {this.state.customers.map(customer => (
            <List key={customer.id}>
              {customer.firstName} {customer.lastName}
            </List>
          ))}
        </CustomerList>
      </div>
    );
  }
}

export default Customers;
