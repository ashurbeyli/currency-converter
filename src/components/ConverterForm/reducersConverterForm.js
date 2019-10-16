// eslint-disable-next-line import/prefer-default-export
export const balanceReducer = (state, action) => {
    switch (action.type) {
        case 'DECREASE':
            return {...state, [action.currency]: state[action.currency] - action.by};
        case 'INCREASE':
            return {...state, [action.currency]: state[action.currency] + action.by};
        default:
            throw new Error();
    }
};