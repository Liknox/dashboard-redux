import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
// import { saveFilters, loadFilters } from "./local-storage"
import rootReducer from "./root-reducer"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["filters"]
	// blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

// const store = createStore(rootReducer, loadFilters(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.subscribe(() => saveFilters({ filters: store.getState().filters }))

export default store
export const persistor = persistStore(store)
