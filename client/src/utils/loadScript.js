const loadScript = (id, src, callback) => {
    const existingScript = document.getElementById(id);
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript) console.log('ALREADY LOADED BITCH');
    if (existingScript && callback) callback();
};
export default loadScript;