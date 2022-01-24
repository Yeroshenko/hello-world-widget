import { useEffect } from 'react';

export const useImportScript = (resourceUrl, onLoad, onUnmount) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        document.body.appendChild(script);

        const loaded = new Promise((resolve) => script.onload = resolve);

        loaded.then(() => {
            onLoad && onLoad()
        })


        return () => {
            onUnmount && onUnmount()
            document.body.removeChild(script)
        };
    }, [resourceUrl, onLoad, onUnmount]);
};
