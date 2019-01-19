import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ContestEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditContestForm" onSubmit={props.editContest}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Contest: </ControlLabel>
            <input type="hidden" value={props.contestData._id} name="id"/>
              <FormControl
                type="text" placeholder="Enter contest"
                name="contestName" defaultValue={props.contestData.contestName}
                />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
              <FormControl
                componentClass="textarea" placeholder="Enter description"
                name="contestDesc" defaultValue={props.contestData.contestDesc}
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
            <ControlLabel>Entrant Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Entrant name"
              name="entrant"
                />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Co-ordinates: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Entrant Co-ordinates"
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

export default ContestEditForm;