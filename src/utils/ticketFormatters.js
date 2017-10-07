import moment from 'moment-with-locales-es6';
moment.locale('ru');

export const formatTime = time => {
  const [ hour, min ] = String(time).split(':')
  
  const formattedHour = hour < 10 ? '0' + hour : hour;
  
  return `${formattedHour}:${min}`;
}

export const formatDate = date => {
  const d = new Date(date);
  const formattedArr = moment(d).format('llll').split(' ').slice(0, 4);
  formattedArr[2] = formattedArr[2].slice(0, 3);

  let day = formattedArr[0];
  day = day.slice(0, 2);
  day = ', ' + day.slice(0,1).toUpperCase() + day.slice(1);

  return formattedArr.slice(1).join(' ') + day;
}

export const formatPrice = price => {
  const strPrice = String(price);

  if(strPrice.length < 5) return strPrice;

  const splitPoint = strPrice.length % 3;
  const headPart = strPrice.slice(0, splitPoint);
  const restPart = strPrice.slice(splitPoint);

  const nbsp = '\u00A0';
  const arrayOfRangs = restPart.match(/[0-9]{3}/g);
  const formattedPrice = `${headPart}${headPart && nbsp}${arrayOfRangs.join(nbsp)}`;

  return formattedPrice;
}

export const formatStopWord = n => {
  if(n === 1) {
    return 'пересадка';
  } else if(n < 5) {
    return 'пересадки';
  } else {
    return 'пересадок';
  }
}