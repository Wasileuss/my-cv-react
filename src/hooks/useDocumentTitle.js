import { useEffect } from 'react';

const SITE_NAME = 'Vasyl Bezkorovainyi — Frontend Developer';

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    }, [title]);
};

export default useDocumentTitle;
