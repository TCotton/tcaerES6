import React from 'react';
import PropTypes from 'prop-types';

class ComponentTwo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			count: props.count,
		}
	}
	render () {
		return (
			<div>
				<h3>Component Two using React.Component</h3>
				<p>Current count: ${this.state.count}</p>
			</div>
		)
	}
}

ComponentTwo.defaultProps = {
	count: 50,
}

ComponentTwo.propTypes = {
	count: PropTypes.number,
}

export default ComponentTwo;
