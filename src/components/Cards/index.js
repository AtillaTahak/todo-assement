import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CheckSquare, Delete } from './Cards.styled';
import useLocalStorage from '../../hooks/use-localstorage';

export default function Cards({
  title, isCompleted, id,
}) {
  const [checked, setChecked] = React.useState('');
  const [isDeleted, setIsDeleted] = React.useState(false);
  const url = `https://63122757f5cba498da8daf58.mockapi.io/todos/${id}`;
  const [userNameLocal] = useLocalStorage('name');

  const updateCompleted = async (stateComplete) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isCompleted: stateComplete,
      }),
    });
    const data = await response.json();
    return data;
  };

  const handleChecked = () => {
    if (checked === '') {
      updateCompleted(true);
      setChecked('line-through');
    } else {
      updateCompleted(false);
      setChecked('');
    }
  };
  const handleDelete = async () => {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json();
    setIsDeleted(true);
    return data;
  };

  useEffect(() => {
    if (isCompleted) {
      setChecked('line-through');
    }
  }, [checked]);
  return (
    <>
      {
      isDeleted ? null : (
        <Card>
          <h1 className="card-title">To do</h1>
          <div className="card-text">
            <CheckSquare id="check" onClick={() => handleChecked()} />
            <p style={{ textDecoration: checked }} id="task-description">
              {title}
            </p>
            <Delete id="delete" onClick={handleDelete} />
          </div>

          <div className="card-footer">
            <div className="card-footer-left">
              <p className="card-footer-left-text">Created at: 12/12/2020</p>
            </div>
            <div className="card-footer-right">
              <p className="card-footer-right-text">
                Created Name :
                {userNameLocal && userNameLocal.map((item) => (
                  item.id === id ? item.name : null
                ))}
              </p>
            </div>
          </div>
        </Card>
      )
    }
    </>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
