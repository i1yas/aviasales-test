import React from 'react';

const Ticket = ({ data }) => {
  const {
    origin, origin_name,
    destination, destination_name,
    departure_date, departure_time,
    carrier, stops, price
  } = data;
  
  const template = <div className='ticket'>
    <div className='ticket__left'>
      <div className='ticket__carrier'>
        {carrier}
      </div>
      <button className='ticket__cto'>
        Купить за {price} Р
      </button>
    </div>
    <div className='ticket__main'>
      <div className='ticket__origin'>
        <div className='ticket__time'>{departure_time}</div>
        <div className='ticket__name'>
          {origin}, {origin_name}
        </div>
      </div>
    </div>
  </div>
  
  return template;
}

export default Ticket;
