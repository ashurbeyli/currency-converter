// eslint-disable-next-line import/prefer-default-export
export const isNumeric =  (x) => {
    // eslint-disable-next-line no-restricted-globals
    return ((typeof x === 'number' || typeof x === 'string') && !isNaN(Number(x)));
};