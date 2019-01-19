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
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="contestDesc" defaultValue={props.contestData.contestDesc}
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