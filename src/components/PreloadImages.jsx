import { useEffect } from 'react';

const PreloadImages = ({ images }) => {
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
            // img.onload = () => console.log(`Loaded: ${image}`);
            img.onerror = () => console.error(`Error loading: ${image}`);
        });
    }, [images]);

    return null;
};

export default PreloadImages;