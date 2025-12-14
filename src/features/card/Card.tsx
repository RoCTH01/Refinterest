import './Card.css'
import DropZone from '@/components/DropZone';
import CardImage from './CardImage';

function Card() {
    const imageUrl = null;
    
    return (
        <div className="card">
            <CardImageWrapper imageUrl={imageUrl} />
        </div>
    );
}

function CardImageWrapper({imageUrl}: {imageUrl: string | null}) {
    return (
        <DropZone>
            <CardImage image_src={imageUrl} />
        </DropZone>
    );
}

export default Card;