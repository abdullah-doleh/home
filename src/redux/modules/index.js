
import {combineReducers} from "redux";//to combine all files in one function

import users from "./users";

import alerts from "./alerts";

import profiles from "./profiles";

import posts from "./posts";

export default combineReducers({
    users,alerts, profiles, posts
});