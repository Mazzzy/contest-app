import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import ContestEditForm from './ContestEditForm';

export default class Contests extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditContest = this.submitEditContest.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteContest = this.cofirmDeleteContest.bind(this);
  }

  componentWillMount(){
    this.props.fetchContests();
  }


  showEditModal(contestToEdit){
     this.props.mappedshowEditModal(contestToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditContest(e){
    e.preventDefault();
    const editForm = document.getElementById('EditContestForm');
    if(editForm.contestName.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('contestName', editForm.contestName.value);
      data.append('contestDesc', editForm.contestDesc.value);
      data.append('startDate', editForm.startDate.value);
      data.append('endDate', editForm.endDate.value);
      data.append('entrant', editForm.entrant.value);
      data.append('coordinates', editForm.coordinates.value);
      this.props.mappedEditContest(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(contestToDelete){
    this.props.mappedshowDeleteModal(contestToDelete);
  }

  cofirmDeleteContest(){
    this.props.mappedDeleteContest(this.props.mappedContestState.contestToDelete);
  }

  render(){
    const contestState = this.props.mappedContestState;
    const contests = contestState.contests;
    const editContest = contestState.contestToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Contests</h3>
      {!contests && contestState.isFetching &&
        <p>Loading contests....</p>
      }
      {contests.length <= 0 && !contestState.isFetching &&
        <p>No Contests Available. Add A Contest to List here.</p>
      }
      {contests && contests.length > 0 && !contestState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Contest</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {contests.map((contest,i) => <tr key={i}>
        <td>{contest.contestName}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(contest)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(contest)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/${contest._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for editing contest */}
    <Modal
      show={contestState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Contest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editContest  &&
    <ContestEditForm contestData={editContest} editContest={this.submitEditContest} />
    }
    {editContest  && contestState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editContest  && !contestState.isFetching && contestState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {contestState.error} </strong>
      </Alert>
    }
    {editContest  && !contestState.isFetching && contestState.successMsg &&
      <Alert bsStyle="success">
  Contest: <strong> {editContest.contestName} </strong>{contestState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

{/* Modal for deleting contest */}
    <Modal
    show={contestState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Contest</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {contestState.contestToDelete && !contestState.error && !contestState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this contest <strong>{contestState.contestToDelete.contestName} </strong> ?
</Alert>
    }
    {contestState.contestToDelete && contestState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{contestState.error} </strong>
</Alert>
    }

    {contestState.contestToDelete && !contestState.error && contestState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!contestState.contestToDelete && !contestState.error && !contestState.isFetching&&
      <Alert bsStyle="success">
 Contest <strong>{contestState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!contestState.successMsg && !contestState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteContest}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {contestState.successMsg && !contestState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}