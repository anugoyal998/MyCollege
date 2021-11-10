import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { branchNotesReducer } from "./branchNotes.reducer";
import { branchReducer } from "./branch.reducer";
import {updateReducer} from './update.reducer'

export const rootReducer = combineReducers({
  authReducer,
  branchNotesReducer,
  branchReducer,
  updateReducer,
});
