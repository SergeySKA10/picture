'use strict';

const getStyles = async (url) => {
    const styles = await fetch(url);

    if (!styles.ok) {
        throw new Error(`Could not fetch: ${url}, status: ${styles.status}`);
    }

    return await styles.json();
}

export { getStyles };