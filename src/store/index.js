import { createStore } from "redux"
import { saveFilters, loadFilters } from "./local-storage"
import rootReducer from "./root-reducer"

const store = createStore(rootReducer, loadFilters(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveFilters({ filters: store.getState().filters }))

export default store
