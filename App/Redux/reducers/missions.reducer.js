import {
  ADD_MISSION,
  GET_MISSIONS,
  GET_MISSION,
  DELETE_MISSION,
  MISSION_LOADING,
  EDIT_MISSION,
  UNARCHIVE_MISSION,
  ARCHIVE_MISSION,
  IS_MODIFIED_MISSION
} from "../actions/types";

const initialState = {
  events: [],
  event: {},
  loading: false,
  search: [],
  searching: false,
  isModified:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MISSION_LOADING:
      return {
        ...state,
        loading: true
      };
    case IS_MODIFIED_MISSION:
      return {
        ...state,
        isModified:false
      };
    case GET_MISSIONS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case GET_MISSION:
      return {
        ...state,
        event: action.payload,
        loading: false
      };
    case ADD_MISSION:
      return {
        ...state,
        events: [...state.events,action.payload],
        event: action.payload
      };
    case EDIT_MISSION:
      return {
        ...state,
        isModified:true,
        missions: state.missions.map((mission) => mission._id === action.payload._id ? mission = action.payload : mission)
      };
    case DELETE_MISSION:
      return {
        ...state,
        missions: state.missions.filter(mission => mission._id !== action.payload),
      };
    case UNARCHIVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => mission._id === action.payload._id ? mission = action.payload : mission)
      };
    case ARCHIVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => mission._id === action.payload._id ? mission = action.payload : mission)
      };
    default:
      return state;
  }
}

