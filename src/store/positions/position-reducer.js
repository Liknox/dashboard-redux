import { ADD_POSITIONS } from "./position-actions"

const positionReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POSITIONS: {
			return action.positions
		}
		default:
			return state
	}
}

export default positionReducer
