import React from 'react';
import Button from '../Button';
import SaveFormStyled from './SaveForm.styled';

function SaveForm() {
  const [todoTitle, setTodoTitle] = React.useState('');
  const [userName, setUserName] = React.useState('');

  return (
    <SaveFormStyled>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="todoTitle">Todo Title</label>
              <input type="text" onChange={(e) => setTodoTitle(e.target.value)} className="form-control" id="todoTitle" placeholder="Todo Title" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" id="userName" placeholder="Enter User Name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Button type="Save" todoTitle={todoTitle} userName={userName} />
            </div>
          </div>
        </div>
      </div>
    </SaveFormStyled>

  );
}

export default SaveForm;
