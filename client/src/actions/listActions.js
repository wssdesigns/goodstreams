import axios from 'axios';

import {
  ADD_LIST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_LISTS,
  GET_LIST,
  LIST_LOADING,
  DELETE_LIST
} from './types';

// Add List
export const addList = listData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/lists', listData)
    .then(res =>
      dispatch({
        type: ADD_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Lists
export const getLists = () => dispatch => {
  dispatch(setListLoading());
  axios
    .get('/api/lists')
    .then(res =>
      dispatch({
        type: GET_LISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LISTS,
        payload: null
      })
    );
};

// Get List
export const getList = id => dispatch => {
  dispatch(setListLoading());
  axios
    .get(`/api/lists/${id}`)
    .then(res =>
      dispatch({
        type: GET_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LIST,
        payload: null
      })
    );
};

// Delete List
export const deleteList = id => dispatch => {
  axios
    .delete(`/api/lists/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_LIST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add List Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/lists/like/${id}`)
    .then(res => dispatch(getLists()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove List Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/lists/unlike/${id}`)
    .then(res => dispatch(getLists()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add List Comment
export const addComment = (listId, listCommentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/lists/comment/${listId}`, listCommentData)
    .then(res =>
      dispatch({
        type: GET_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete List Comment
export const deleteComment = (listId, listCommentId) => dispatch => {
  axios
    .delete(`/api/lists/comment/${listId}/${listCommentId}`)
    .then(res =>
      dispatch({
        type: GET_LIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setListLoading = () => {
  return {
    type: LIST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
