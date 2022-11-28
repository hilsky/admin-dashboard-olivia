import { combineReducers } from "redux";
import users from './user';
import userReducer from "./userReducer";
import wisata from "./wisata"
import wisataReducer from "./wisataReducer";
import pemandu from './pemandu';
import pemanduReducer from './pemanduReducer'
import kulinerReducer from "./kulinerReducer";
import hotelReducer from "./hotelReducer";
import hotel from './hotel'

export default combineReducers({
    users,
    userReducer,
    wisata,
    wisataReducer,
    pemandu,
    pemanduReducer,
    kulinerReducer,
    hotelReducer,
    hotel
})