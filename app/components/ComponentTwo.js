import React from 'react';
import PropTypes from 'prop-types';

const isAdmin = true;
const adminComponent = (Component) => {
	return class Admin extends Component {
		componentDidUpdate () {
			console.log('Admin component did update');
			if (super.componentDidUpdate) {
				super.componentDidUpdate();
			}
		}

		render () {
			if (isAdmin) {
				return (
					<div className='callout secondary'>
						<p className='alert label'>test text here</p>
						{super.render()}
					</div>
				)
			} else {
				return 'No access';
			}
		}
	};
};

class ComponentTwo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			count: props.count,
		}

		this.onClick = this.onClick.bind(this);
	}

	componentDidUpdate () {
		console.log('ComponentTwo did update');
	}

	onClick () {
		this.setState({
			count: this.state.count + 1,
		})
	}

	render () {
		return (
			<div>
				<h3>Component Two using React.Component</h3>
				<p>Current count: ${this.state.count}</p>
				<button className='button' onClick={this.onClick}>Button two</button>
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

export default adminComponent(ComponentTwo);
