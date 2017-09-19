import React from 'react';
import BuyButton from './BuyButton';
import '../css/ticket.css';

const formatPrice = price => {
  const strPrice = String(price);

  if(strPrice.length < 5) return strPrice;

  const splitPoint = strPrice.length % 3;
  const headPart = strPrice.slice(0, splitPoint);
  const restPart = strPrice.slice(splitPoint);

  const arrayOfRangs = restPart.match(/[0-9]{3}/g);
  const formattedPrice = `${headPart}${headPart && ' '}${arrayOfRangs.join(' ')}`;

  return formattedPrice;
}

const getStopWord = n => {
  if(n === 1) {
    return 'пересадка';
  } else if(n < 5) {
    return 'пересадки';
  } else {
    return 'пересадок';
  }
}

const PlaceInfo = ({ data }) => {
  const { time, short_name, full_name, date } = data;
  return (
  <div className='place-info'>
    <div className='place-info__time'>{time}</div>
    <div className='place-info__name'>{short_name}, {full_name}</div>
    <div className='place-info__date'>{date}</div>
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
      <div className='ticket__stops'>{stops} {getStopWord(stops)}</div>
      <PlaceInfo data={{
        time: arrival_time, short_name: destination,
        full_name: destination_name, date: arrival_date 
      }} />
    </div>
  </div>
  
  return template;
}

export default Ticket;
