import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CardItem({ item }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <div className="card-body">
        <h5 className="card-title mb-2">{item?.header}</h5>
        <ul className="list-group mb-2">
          {item?.options?.map((el) => <li key={uuidv4()} style={{ marginLeft: '21px' }}>{el}</li>)}
        </ul>
        <p className="card-text">{item?.text}</p>
      </div>
    </div>
  );
}
