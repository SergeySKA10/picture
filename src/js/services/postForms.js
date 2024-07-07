'use strict';

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        body: data
    });

    if (!response.ok) {
        throw new Error(`Could not fetch: ${url}, status: ${response.status}`);
    }

    return await response.text();
}

export {postData};