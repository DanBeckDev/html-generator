async function handleAPI(url) {
    const response = await fetch(url);
    const text = await response.text();
    return response.ok ? text : Promise.reject(text);
}

export { handleAPI};