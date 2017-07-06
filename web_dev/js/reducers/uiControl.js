import {
	uiData
} from '../constants/model';
import Immutable from 'immutable';

const uiControl = (state = uiData, action) => {
	switch (action.type) {
		case 'BUTTON_CLICK':
			const showNumber = state.get("showNumber") + 1;
			return state.set("showNumber", showNumber);
		default:
			return state;
	}
}

export default uiControl;