import React from 'react';

function compose(...hocs: any[]) {
    return (...args: any) =>
        hocs
            .flat()
            .reverse()
            .reduce((prev, func) => [func(...prev)], args)[0];
}

export default compose;
