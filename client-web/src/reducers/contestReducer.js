const INITIAL_STATE = {
  contests:[],
  contest:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  contestToDelete: null,
  showEditModal: false,
  contestToEdit: null,
  newcontest: null
}

const contestReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CONTESTS_REQUEST':
          return {
            ...currentState,
            contests:[],
            contest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'FETCH_CONTESTS_SUCCESS':
          return {
            ...currentState,
            contests:action.contests,
            contest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'FETCH_CONTESTS_FAILED':
          return {
            ...currentState,
            contests:[],
            contest:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'FETCH_CONTEST_REQUEST':
          return {
            ...currentState,
            contests:currentState.contests,
            contest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'FETCH_CONTEST_SUCCESS':
          return {
            ...currentState,
            contests:currentState.contests,
            contest:action.contest,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'FETCH_CONTEST_FAILED':
          return {
            ...currentState,
            contests:[],
            contest:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
          }

    case 'ADD_NEW_CONTEST_REQUEST':
          return {
            ...currentState,
            contests:currentState.contests,
            contest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
            newContest: action.contest
          }

    case 'ADD_NEW_CONTEST_REQUEST_FAILED':
          return {
            ...currentState,
            contests:currentState.contests,
            contest:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
            newContest: null
          }

    case 'ADD_NEW_CONTEST_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            contests:[...currentState.contests, action.contest],
            contest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: false,
            contestToEdit: null,
            newContest: action.contest
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          contestToDelete: null,
          showEditModal: true,
          contestToEdit: action.contest,
          newContest: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          contestToDelete: null,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }

    case 'EDIT_CONTEST_REQUEST':
          return {
            ...currentState,
            contests:currentState.contests,
            contest:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: true,
            contestToEdit: action.contest,
            newContest: null
          }

    case 'EDIT_CONTEST_SUCCESS':
         const updatedContests = currentState.contests.map((contest) => {
           if(contest._id !== action.contest._id){
             //This is not the item we care about, keep it as is
             return contest;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...contest, ...action.contest }
         })
          return {
            ...currentState,
            contests:updatedContests,
            contest:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            contestToDelete: null,
            showEditModal: true,
            contestToEdit: action.contest,
            newContest: null
          }

  case 'EDIT_CONTEST_FAILED':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          contestToDelete: null,
          showEditModal: true,
          contestToEdit: currentState.contestToEdit,
          newContest: null
        }

  case 'DELETE_CONTEST_REQUEST':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          contestToDelete: action.contest,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }

  case 'DELETE_CONTEST_SUCCESS':
  const filteredContests = currentState.contests.filter((contest) => contest._id !== currentState.contestToDelete._id)
        return {
          ...currentState,
          contests:filteredContests,
          contest:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          contestToDelete: null,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }


  case 'DELETE_CONTEST_FAILED':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          contestToDelete: null,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          contestToDelete: action.contest,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          contests:currentState.contests,
          contest:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          contestToDelete: null,
          showEditModal: false,
          contestToEdit: null,
          newContest: null
        }


    default:
       return currentState;

  }
}
export default contestReducer