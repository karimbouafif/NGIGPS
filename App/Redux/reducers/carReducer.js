import {
  ADD_CAR,
  GET_CARS,
  GET_CAR,
  DELETE_CAR,
  CAR_LOADING,
  EDIT_CAR,
  UNARCHIVE_CAR,
  ARCHIVE_CAR,
  IS_MODIFIED_CAR
} from "../actions/types";

const initialState = {
  cars: [],
  car: {},
  loading: false,
  search: [],
  searching: false,
  isModified:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CAR_LOADING:
      return {
        ...state,
        loading: true
      };
    case IS_MODIFIED_CAR:
      return {
        ...state,
        isModified:false
      };
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false
      };
    case GET_CAR:
      return {
        ...state,
        cars: action.payload,
        loading: false
      };
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars,action.payload],
        car: action.payload
      };
    case EDIT_CAR:
      return {
        ...state,
        isModified:true,
        cars: state.cars.map((car) => car._id === action.payload._id ? car = action.payload : car)
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter(car => car._id !== action.payload),
      };
    case UNARCHIVE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) => car._id === action.payload._id ? car = action.payload : car)
      };
    case ARCHIVE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) => car._id === action.payload._id ? car = action.payload : car)
      };
    default:
      return state;
  }
}

