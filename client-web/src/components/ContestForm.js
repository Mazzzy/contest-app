import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ContestForm = (props) => {
  return (
    <form className="form form-horizontal" id="addContestForm" onSubmit={props.addContest}>
    <div className="row">
      <h3 className="centerAlign">Add Your Contest</h3>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Contest: </ControlLabel>
          <FormControl
            type="text" placeholder="Enter Contest"
            name="contestName"
              />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Description: </ControlLabel>
          <FormControl
            componentClass="textarea" placeholder="Enter description"
            name="contestDesc"
              />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Start Date: </ControlLabel>
          <FormControl
            type="date" placeholder="Start Date"
            name="startDate"
              />
        </FormGroup>
        <FormGroup>
        <ControlLabel>End Date: </ControlLabel>
          <FormControl
            type="date" placeholder="End Date"
            name="endDate"
              />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Entrant Name: Comma Seperated Entrants name</ControlLabel>
          <FormControl
            type="text" placeholder="Enter Entrant name"
            name="entrant"
              />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Co-ordinates: JS Obj having lat and lng as keys | Seperate Objs by "+" </ControlLabel>
          <FormControl
            type="text" placeholder="Format : {lat: 12.3, lng: 45.6} + {lat: 7.89, lng: 1.23}"
            name="coordinates"
              />
        </FormGroup>
      </div>
    </div>
    <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
    </FormGroup>
    </form>
  );
}

export default ContestForm;