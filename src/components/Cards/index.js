import React from 'react';
import { Card, CheckSquare, Delete } from './Cards.styled';

export default function Cards() {
  return (
    <Card>
      <h1 className="card-title">Card</h1>
      <div className="card-text">
        <CheckSquare />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        <Delete />
      </div>

      <div className="card-footer">
        <div className="card-footer-left">
          <p className="card-footer-left-text">Created at: 12/12/2020</p>
        </div>
        <div className="card-footer-right">
          <p className="card-footer-right-text">Created Name : Lorem ipsum</p>
        </div>
      </div>
    </Card>
  );
}
