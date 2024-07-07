'use strict';

const getValue = async (url) => {
    const values = await fetch(url);

    if (!values.ok) {
        throw new Error(`Could not fetch ${url}, stauts: ${value.status}`);
    }

    return await values.json();
}

export  { getValue };