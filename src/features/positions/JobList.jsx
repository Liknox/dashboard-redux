import { useDispatch } from "react-redux"
import { JobPosition } from "./JobPosition"

import { addFilter } from "../filter/filter-slice"
import { usePositions } from "./use-positions"
import { useFetchPosiotions } from "./use-fetch-positions"

const JobList = () => {
	useFetchPosiotions()

	const positions = usePositions()
	const dispatch = useDispatch()

	const handleAddFilter = filter => {
		dispatch(addFilter(filter))
	}

	return (
		<div className="job-list">
			{positions.map(item => (
				<JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
			))}
		</div>
	)
}

export { JobList }
