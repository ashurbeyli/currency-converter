export const omitSelectedFromPockets = (pockets, selected) =>
    pockets.filter(el => el !== selected);

export const getFirstFromOmittedPockets = (pockets, selected) => {
    const omitted = omitSelectedFromPockets(pockets, selected);
    return omitted && omitted.length ? omitted[0] : undefined;
};

export const fixedAmount = (amount) => amount && amount.toFixed(2);

export const convertAmount = (amount, from, to, rates) => {
    const fromRate = rates && rates[from] ? rates[from] : undefined;
    const toRate = rates && rates[to] ? rates[to] : undefined;
    return amount && fromRate && toRate ? fixedAmount(amount * toRate / fromRate) : undefined;
};
