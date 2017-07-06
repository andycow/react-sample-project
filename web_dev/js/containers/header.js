import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import {
	buttonClick
}
from '../actions';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button onClick={this.props.actions.buttonClick}>123123</button>
				<div>{this.props.uiControl.get("showNumber")}</div>
			</div>
		)
	}
}

function propMap(state) {
	return {
		uiControl: state.uiControl
	}
}

function actionGroup(dispatch) {
	console.log(dispatch)
	return {
		actions: bindActionCreators({
			buttonClick: buttonClick
		}, dispatch)
	}
}

export default connect(propMap, actionGroup)(Header)