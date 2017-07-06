import React, {
	Component
} from 'react';


class DataShowArea extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="dataShowArea" >
					<div>{this.props.inputData}</div>
				</div>
	}
}

export default DataShowArea