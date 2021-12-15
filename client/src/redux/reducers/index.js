import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { branchNotesReducer } from "./branchNotes.reducer";
import { branchReducer } from "./branch.reducer";

export const rootReducer = combineReducers({
  authReducer,
  branchNotesReducer,
  branchReducer,
});
