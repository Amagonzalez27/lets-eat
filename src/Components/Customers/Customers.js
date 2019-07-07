import React, { Component } from 'react';
import './customer.css';

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
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
