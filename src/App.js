import React, { Component } from 'react';
import Ticket from './components/Ticket';
import './css/app.css';

class App extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        {data.tickets.map((ticket, index) => (
          <Ticket
            data={ticket}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
