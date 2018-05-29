import React from 'react';
import ReactClass from 'create-react-class';

const ComponentOne = ReactClass({
	getInitialState: function () {
		return {
			count: this.props.count,
		}
	},
	getDefaultProps: function() {
		return {
			count: 11,
		}
	},
	render: function() {
		return(
			<div>
				<h3>Component One using ReactClass</h3>
				<p>Current count ${this.state.count}</p>
			</div>
		)
	}
});

export default ComponentOne;
