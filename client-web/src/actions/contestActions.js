const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_CONTEST'
  }
}

export const addNewContest = (contest) => {console.log(contest)
  return (dispatch) => {
    dispatch(addNewContestRequest(contest));
    return fetch(apiUrl, {
      method:'post',
      body: contest,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.contest);
          dispatch(addNewContestRequestSuccess(data.contest, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewContestRequestFailed(error))
        })
      }
    })
  }
}

export const addNewContestRequest = (contest) => {
  return {
    type: 'ADD_NEW_CONTEST_REQUEST',
    contest
  }
}

export const addNewContestRequestSuccess = (contest,message) => {
  return {
    type: 'ADD_NEW_CONTEST_REQUEST_SUCCESS',
    contest:contest,
    message:message
  }
}

export const addNewContestRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_CONTEST_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchContests = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchContestsRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchContestsSuccess(data.contests,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchContestsFailed(error));
                    })
                  }
                })


  }
}

export const fetchContestsRequest = () => {
  return {
    type:'FETCH_CONTESTS_REQUEST'
  }
}


//Sync action
export const fetchContestsSuccess = (contests,message) => {
  return {
    type: 'FETCH_CONTESTS_SUCCESS',
    contests: contests,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchContestsFailed = (error) => {
  return {
    type:'FETCH_CONTESTS_FAILED',
    error
  }
}

export const fetchContestById = (contestId) => {
  return (dispatch) => {
    dispatch(fetchContestRequest());
      // Returns a promise
      return fetch(apiUrl + contestId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchContestSuccess(data.contest[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchContestFailed(error));
                 })
               }
             })

  }
}

export const fetchContestRequest = () => {
  return {
    type:'FETCH_CONTEST_REQUEST'
  }
}


//Sync action
export const fetchContestSuccess = (contest,message) => {
  return {
    type: 'FETCH_CONTEST_SUCCESS',
    contest: contest,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchContestFailed = (error) => {
  return {
    type:'FETCH_CONTEST_FAILED',
    error
  }
}

export const showEditModal = (contestToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    contest:contestToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editContest = (contest) => {
    return (dispatch) => {
      dispatch(editContestRequest(contest));
      return fetch(apiUrl, {
        method:'put',
        body:contest
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editContestSuccess(data.contest,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editContestFailed(error));
          })
        }
      })
    }
}

export const editContestRequest = (contest) => {
   return {
     type:'EDIT_CONTEST_REQUEST',
     contest
   }
}

export const editContestSuccess = (contest,message) => {
  return {
    type:'EDIT_CONTEST_SUCCESS',
    contest:contest,
    message:message
  }
}

export const editContestFailed = (error) => {
  return {
    type:'EDIT_CONTEST_FAILED',
    error
  }
}

export const deleteContest = (contest) => {
  return (dispatch) => {
    dispatch(deleteContestRequest(contest));
    return fetch(apiUrl + contest._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteContestSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteContestFailed(error));
        })
      }
    })

  }
}

export const deleteContestRequest = (contest) => {
   return {
     type:'DELETE_CONTEST_REQUEST',
     contest
   }
}

export const deleteContestSuccess = (message) => {
  return {
    type:'DELETE_CONTEST_SUCCESS',
    message:message
  }
}

export const deleteContestFailed = (error) => {
  return {
    type:'DELETE_CONTEST_FAILED',
    error
  }
}

export const showDeleteModal = (contestToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    contest:contestToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}