import axios from "../../Config/api/api";
import {
  ADD_CAR,
  GET_CARS,
  GET_CAR,
  DELETE_CAR,
  CAR_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  EDIT_CAR,
  UNARCHIVE_CAR,
  ARCHIVE_CAR,
  IS_MODIFIED_CAR
} from "./types";

export const addBike = (bikeData) => dispatch => {
  dispatch(clearErrors());
  axios.post("/voitures/add", bikeData)
    .then(res =>
      dispatch({
        type: ADD_CAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const editBike = (bikeData,id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/voitures/update/${id}`, bikeData)
    .then(res => {
      dispatch({
        type: EDIT_CAR,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const archiveBike = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/voitures/archive/${id}`)
    .then(res =>
      dispatch({
        type: ARCHIVE_CAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const unarchiveBike = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/voitures/unarchive/${id}`)
    .then(res =>
      dispatch({
        type: UNARCHIVE_CAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};



export const getBikes = () => dispatch => {
  dispatch(setBikeLoading());
  axios
    .get("/voitures/")
    .then(res => {
      dispatch({
        type: GET_CARS,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const getBike = id => dispatch => {
  dispatch(setBikeLoading());
  axios
    .get(`/voitures/${id}`)
    .then(res =>
      dispatch({
        type: GET_CAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const deleteBike = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/voitures/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CAR,
        payload: id
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};




// export const searchBikes = (min, max) => dispatch => {
//   const body = { min, max };
//   axios
//   .post('/BIKEs/search/',body)
//   .then(res =>
//     dispatch({
//       type: SEARCH_BIKE,
//       payload: res.data
//     })
//   )
//   .catch(error => {
//     if (error.response && error.response.data) {
//       dispatch({
//         type: GET_ERRORS,
//         payload: {
//           message: error.response.data,
//           visible: true
//         }
//       })
//     }
//   })
// }

// Set loading state
export const setBikeLoading = () => {
  return {
    type: CAR_LOADING
  };
};
export const setIsModifiedBikeLoading = () => {
  return {
    type: IS_MODIFIED_CAR
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
