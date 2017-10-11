import React, { Component } from 'react';
import Ticket from './components/Ticket';
import LeftBar from './components/LeftBar';
import './css/app.css';

const AppTemplate = ({ tickets, filter, currentFilter }) => {
	return (
		<div className='App'>
			<div className='App__left-side'>
				<LeftBar
					filter={filter}
					currentFilter={currentFilter}
				/>
			</div>
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
	constructor(props) {
		super(props);
		this.state = {
			currentFilter: 'all',
			tickets: props.data.tickets
		}
	}

	filter(s) {
		if(s === 'all') {
			this.setState({
				currentFilter: 'all',
				tickets: this.props.data.tickets
			})
		} else {
			this.setState((prevState, props) => {
				return {
					currentFilter: s,
					tickets: props.data.tickets.filter(ticket => ticket.stops === s)
				};
			});
		}
	}

	render() {
		return <AppTemplate
			tickets={this.state.tickets}
			filter={this.filter.bind(this)}
			currentFilter={this.state.currentFilter}
		/>
	}
}

export default App;
