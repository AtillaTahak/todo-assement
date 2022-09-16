import React from 'react';
import Button from '../Button';
import SaveFormStyled from './SaveForm.styled';

function SaveForm() {
  return (
    <SaveFormStyled>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="todoTitle">Todo Title</label>
              <input type="text" className="form-control" id="todoTitle" placeholder="Todo Title" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="Task">Task</label>
              <textarea className="form-control" id="Task" rows="3" placeholder="Write anything in your mind" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input type="text" className="form-control" id="userName" placeholder="Enter User Name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Button type="Save" />
            </div>
          </div>
        </div>
      </div>
    </SaveFormStyled>

  );
}

export default SaveForm;
