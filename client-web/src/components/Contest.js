import React from 'react';
export default class Contest extends React.Component {
  componentDidMount(){
    this.props.mappedfetchContestById(this.props.params.id);
  }

  render(){
    const contestState = this.props.mappedContestState;
    return(
      <div className="contestDetail">
       <h2>Contest Detail</h2>
         {!contestState.contest && contestState.isFetching &&
           <div>
             <p>Loading contest....</p>
           </div>
         }
       {contestState.contest && !contestState.isFetching &&
         <div>
           <h3>{contestState.contest.contestName}</h3>
           <p>{contestState.contest.contestDesc}</p>
         </div>
       }
      </div>
    );
  }
}