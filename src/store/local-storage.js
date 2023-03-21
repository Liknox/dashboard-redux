export const loadFilters = () => {
	try {
		const savedState = localStorage.getItem("filters")
		return savedState === null ? undefined : JSON.parse(savedState)
	} catch (error) {
		return undefined
	}
}

export const saveFilters = filters => {
	try {
		localStorage.setItem("filters", JSON.stringify(filters))
	} catch (error) {
		console.error(error)
	}
}
