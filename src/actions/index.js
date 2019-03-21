import * as actionTypes from './../constants/actionTypes'

export function openModal(mediaId) {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}

export function searchEntities(query) {
  return {
    type: actionTypes.SEARCH_ENTITIES,
    payload: {
      query
    }
  }
}

export function isLoading(value) {
  return {
    type: actionTypes.IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {
    // fetch().then((resp) => { dispatch() })
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 3000)
  }
}
