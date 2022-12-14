import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendReducer} from "./friendReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from 'redux-thunk'

export type AppReduxType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendsPage: friendReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(reducers, applyMiddleware(thunk))

