import React from 'react';
import '../styles/CardStyle.scss';

const List = ({ data, icon, type }) => (

  <ul>
    <li>
      <ion-icon name={icon}></ion-icon>
      <div>
        <div className='type'>{type}</div>
        <div>{data}</div>
      </div>
    </li>
  </ul>

);

export default List;