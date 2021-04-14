import axios from './../../Services/api/authService';
import {
  ADD_MISSION,
  GET_MISSIONS,
  GET_MISSION,
  DELETE_MISSION,
  MISSION_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  EDIT_MISSION,
  UNARCHIVE_MISSION,
  ARCHIVE_MISSION,
  IS_MODIFIED_MISSION
} from './types';

export const addMission = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.post("http://localhost:4000/api/missions/add", eventData)
    .then(res =>
      dispatch({
        type: ADD_MISSION,
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

export const editMission = (missionData,id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/missions/update/${id}`, missionData)
    .then(res => {
      dispatch({
        type: EDIT_MISSION,
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

export const archiveMission = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/missions/archive/${id}`)
    .then(res =>
      dispatch({
        type: ARCHIVE_MISSION,
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

export const unarchiveMission = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/missions/unarchive/${id}`)
    .then(res =>
      dispatch({
        type: UNARCHIVE_MISSION,
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



export const getMissions = () => dispatch => {
  dispatch(setMissionLoading());
  axios
    .get("/missions/")
    .then(res => {
      dispatch({
        type: GET_MISSION,
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

export const getMission = id => dispatch => {
  dispatch(setMissionLoading());
  axios
    .get(`/missions/${id}`)
    .then(res =>
      dispatch({
        type: GET_MISSION,
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

export const deleteMission = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/missions/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MISSION,
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




// export const searchEvents = (min, max) => dispatch => {
//   const body = { min, max };
//   axios
//   .post('/EVENTs/search/',body)
//   .then(res =>
//     dispatch({
//       type: SEARCH_EVENT,
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
export const setMissionLoading = () => {
  return {
    type: MISSION_LOADING
  };
};
export const setIsModifiedMissionLoading = () => {
  return {
    type: IS_MODIFIED_MISSION
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
