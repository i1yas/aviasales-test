import React from 'react';
import BuyButton from './BuyButton';
import '../css/ticket.css';
import airplaneIcon from '../airplane.svg';
import {
  formatDate, formatPrice, formatTime, formatStopWord
} from '../utils/ticketFormatters';

const PlaceInfo = ({ data }) => {
  const { time, short_name, full_name, date } = data;
  return (
  <div className='place-info'>
    <div className='place-info__time'>{formatTime(time)}</div>
    <div className='place-info__name'>{short_name}, {full_name}</div>
    <div className='place-info__date'>{formatDate(date)}</div>
  </div>
)};

const Ticket = ({ data }) => {
  const {
    origin, origin_name,
    destination, destination_name,
    departure_date, departure_time,
    arrival_date, arrival_time,
    carrier, stops, price
  } = data;
  
  const template = <div className='ticket'>
    <div className='ticket__left'>
      <div className='ticket__carrier'>
        {carrier}
      </div>
      <BuyButton>
        Купить за {formatPrice(price)}{'\u00A0'}Р
      </BuyButton>
    </div>
    <div className='ticket__main'>
      <PlaceInfo data={{
        time: departure_time, short_name: origin,
        full_name: origin_name, date: departure_date
      }} />
      <div className='ticket__stops'>
        <div className='ticket__stops-sign'>
          {stops > 0 ?
            stops + ' ' + formatStopWord(stops)
            :
            ' '
          }
        </div>
        <div className='ticket__stops-bottom'>
          <img
            className='ticket__stops-airplane'
            src={airplaneIcon}
            alt=''
          />
        </div>
      </div>
      <PlaceInfo data={{
        time: arrival_time, short_name: destination,
        full_name: destination_name, date: arrival_date 
      }} />
    </div>
  </div>
  
  return template;
}

export default Ticket;
