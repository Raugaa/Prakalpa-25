// hooks/useSmoothScrollTo.js
import { useEffect, useRef } from 'react';

const useSmoothScrollTo = (id) => {
    const ref = useRef(null);

    useEffect(() => {
        const listener = () => {
            if (ref.current && window.location.hash === id) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', listener, true);
        return () => {
            window.removeEventListener('hashchange', listener);
        };
    }, [id]);

    return { ref };
};

export default useSmoothScrollTo;
