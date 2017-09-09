import React, { Component } from 'react';
import Ticket from './components/Ticket';

class App extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        {data.tickets.map(ticket => (
          <Ticket data={ticket} />
        ))}
      </div>
    );
  }
}

export default App;
