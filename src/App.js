import React, { Component } from 'react';
import Ticket from './components/Ticket';
import LeftBar from './components/LeftBar';
import './css/app.css';

const AppTemplate = ({ tickets }) => {
	return (
		<div className='App'>
			<div className='App__left-side'><LeftBar /></div>
			<div className='App__main'>
				{tickets.map((ticket, index) => (
				  <Ticket
				    data={ticket}
				    key={Number(index)}
				  />
				))}
			</div>
		</div>
	);
}

class App extends Component {
  render() {
    const { data } = this.props;
    return <AppTemplate tickets={data.tickets} />
  }
}

export default App;
