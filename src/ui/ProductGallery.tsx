import { useState } from 'react';
import styles from './ProductGallery.module.css';

type props = {
    images: Array<string>,
}

export function ProductGallery({ images }: props) {
    const imageUrls = images.map(img => 
        `https://clothapi.progskill.ru${img}`
    );
    const [mainImage, setMainImage] = useState(imageUrls[0]);

    const handleThumbnailClick = (clickedImage: string) => {
        setMainImage(clickedImage);
    };

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnails}>
                {imageUrls.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={styles.thumbnail}
                        onClick={() => handleThumbnailClick(img)}
                    />
                ))}
            </div>
            <div className={styles.mainImage}>
                <img src={mainImage} alt="Main product" />
            </div>
        </div>
    );
}