import * as acttionTypes from "../types";

export const setBranchNotesAction = (data) => {
  return {
    type: acttionTypes.SET_NOTES_BRANCH,
    payload: data,
  };
};

export const setAllNotesAction = (data) => {
  return {
    type: acttionTypes.SET_ALL_NOTES,
    payload: data,
  };
};

export const setSearchNotesAction = (data) => {
  return {
    type: acttionTypes.SET_SEARCH_NOTES,
    payload: data,
  };
};
