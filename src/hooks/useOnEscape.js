import { useEffect } from 'react';

const useOnEscape = (handler, active = true) => {
    useEffect(() => {
        if (!active) return;
        const listener = (event) => {
            // check if key is an Escape
            if (event.key === 'Escape') handler(event);
        };
        document.addEventListener('keyup', listener);

        return () => {
            if (!active) return;
            document.removeEventListener('keyup', listener);
        };
    }, [handler, active]);
};

export default useOnEscape;
