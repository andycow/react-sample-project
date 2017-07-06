import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux';
import DataShowArea from '../components/dataShowArea';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const showNumber = this.props.uiControl.get("showNumber");
		return (
			<div>
				<div>{showNumber}</div>
				<DataShowArea inputData={showNumber}/>
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
	return {

	}
}

export default connect(propMap, actionGroup)(Footer)