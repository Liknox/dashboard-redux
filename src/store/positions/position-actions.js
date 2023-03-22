import { API_URL } from "../config"

export const ADD_POSITIONS = "ADD_POSITIONS"

 const addPositions = positions => ({
	type: ADD_POSITIONS,
	positions
})

export const loadPositions = () => dispatch => {
	fetch(API_URL)
		.then(res => res.json())
		.then(data => dispatch(addPositions(data)))
}
