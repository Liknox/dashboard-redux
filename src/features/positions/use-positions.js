import { useSelector } from "react-redux"

import { selectVisiblePositions } from "./position-slice"
import { selectFitlers } from "../filter/filter-slice"

export const usePositions = () => {
	const currentFitlers = useSelector(selectFitlers)
	const positions = useSelector(state => selectVisiblePositions(state, currentFitlers))

	return positions
}
