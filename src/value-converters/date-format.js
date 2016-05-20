import moment from 'moment';

export class DateFormatValueConverter {
  toView(value, format) {
    if (format.toLowerCase() === 'fromnow')
      return moment(value).fromNow();
    else
      return moment(value).format(format);
  }
}
