import React from 'react';

const PocketInfo = ({ value, currency }) => {
    return <span>You have {value}{currency}</span>;
};

export default PocketInfo;