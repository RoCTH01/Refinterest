import './CardImage.css';

type CardImageProps = {
    image_src: string | null;
};

function CardImage(props: CardImageProps) {

    if (props.image_src === null) {
        return <div className="card-image-placeholder">Please drag an image here</div>;
    }

    return <img src={props.image_src ?? undefined} alt="Card Image" />;
}
export default CardImage;