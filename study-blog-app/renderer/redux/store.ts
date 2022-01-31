import { createStore, applyMiddleware, compose, Store, AnyAction } from "redux"
import thunk from "redux-thunk"
import { createWrapper, MakeStore } from "next-redux-wrapper"
import rootReducer, { ReducerType } from "./reducers/rootReducers"

const middleware = [thunk]

const makeStore: MakeStore<Store<ReducerType, AnyAction>> = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)