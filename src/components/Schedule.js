import React from 'react';
import '../styles/ScheduleStyle.scss';

const Scheadule = ({ range, days }) => {
  console.log(days);
  return (
    <div className='scheduleContainer'>
      <div className='title'>
        <h2>{range}</h2>
      </div>
      <div className='table'>
        {days.map(day => (
          <div>
            <div className='day'>
              <div className='nameOfDay'>{day.nameOfDay}</div>
              <div className='dayAndMonth'>{day.dayAndMonth}</div>
            </div>
            <ul className='list'>
              {day.hours.map(hour => (
                <li key={hour} className='hours'>{hour}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div >

  );

};

export default Scheadule;