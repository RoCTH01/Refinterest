import './CardImage.css';

type CardImageProps = {
    src: string;
};

function CardImage(props: CardImageProps) {
    return <img src={props.src} alt="Card Image" />;
}
export default CardImage;