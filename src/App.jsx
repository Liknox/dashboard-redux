import { FilterPanel } from "./features/filter/FilterPanel"
import { JobList } from "./features/positions/JobList"
import { TheHeader } from "./components/TheHeader"

function App() {
	return (
		<div>
			<TheHeader />
			<div className="container">
				<FilterPanel />
				<JobList />
			</div>
		</div>
	)
}

export default App
