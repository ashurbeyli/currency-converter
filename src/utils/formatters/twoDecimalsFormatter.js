import { isNumeric } from '../commonUtils';

/* @TODO: need to refactor here */
export default fn => evt => {
  const number = evt && evt.target ? evt.target.value : '';
  if (!isNumeric(number)) return fn(number.substr(0, number.length - 1));
  const splitted = number && number.split('.');
  return (
    fn &&
    fn(
      splitted && splitted.length > 1
        ? [splitted[0], splitted[1].substr(0, 2)].join('.')
        : number
    )
  );
};
