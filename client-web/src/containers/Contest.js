import { connect } from 'react-redux';
import * as contestActions from '../actions/contestActions';
import Contest from '../components/Contest';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedContestState: state.contestState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchContestById: contestId => dispatch(contestActions.fetchContestById(contestId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contest);