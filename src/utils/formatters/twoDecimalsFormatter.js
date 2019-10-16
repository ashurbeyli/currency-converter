import _ from 'lodash';
import { isNumeric } from '../commonUtils';

export default value => {
  if (!isNumeric(value))
    return value && _.isString(value) ? value.substr(0, value.length - 1) : '';
  const parts = value && value.split('.');
  return parts && parts.length > 1
    ? `${parts[0]}.${parts[1].slice(0, 2)}`
    : value;
};
