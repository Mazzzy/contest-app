import { connect } from 'react-redux';
import * as contestActions from '../actions/contestActions';
import Contests from '../components/Contests';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedContestState: state.contestState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchContests: () => dispatch(contestActions.fetchContests()),
    mappedEditContest: contestToEdit => dispatch(contestActions.editContest(contestToEdit)),
    mappedshowEditModal: contestToEdit => dispatch(contestActions.showEditModal(contestToEdit)),
    mappedhideEditModal: () => dispatch(contestActions.hideEditModal()),
    mappedDeleteContest: contestToDelete => dispatch(contestActions.deleteContest(contestToDelete)),
    mappedshowDeleteModal: contestToDelete => dispatch(contestActions.showDeleteModal(contestToDelete)),
    mappedhideDeleteModal: () => dispatch(contestActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contests);