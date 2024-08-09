import css from "./ImageCard.module.css";
interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
}

interface ImageCardProps {
    image: Image;
    onClick: (image: Image) => void;
    className?: string;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
return (
    <div onClick={() => onClick(image)} className={css.div}>
    <img src={image.urls.small} alt={image.alt_description}  className={css.img}/>
    </div>
);
}