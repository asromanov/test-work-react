import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getData from '../../API/getData';
import CardItem from '../CardItem/CardItem';

export default function CardList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cards List</h1>
      <div className="d-flex flex-row justify-content-center mb-3">
        {data?.map((el) => <CardItem key={uuidv4()} item={el} />)}
      </div>
    </div>
  );
}
