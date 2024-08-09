import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";

interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
}

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
}

export default function ImageGallery ({ images, onImageClick }: ImageGalleryProps) {
return (
    <ul className={css.ul}>
    {images.map((image) => (
        <li key={image.id} className={css.li}>
        <ImageCard image={image} onClick={() => onImageClick(image)} className={css.img} />
        </li>
    ))}
    </ul>
);
}