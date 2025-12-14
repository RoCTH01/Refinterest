import { useState } from 'react'
import './Card.css'

import CardImage from "./CardImage";
import CardDescription from "./CardDescription";
import ReactionButton from "./ReactionButton";

function Card() {
    const likeReaction = "❤️ ";
    const [likes, setLikes] = useState(0);
    const imageUrl = "src/assets/joucho.jpg";
    const description = "This is Isekaijoucho!!!";
    
    return (
        <div className="card">
            <CardImage src={imageUrl} />
            <CardDescription description={description} />
            <ReactionButton reaction={likeReaction} count={likes} onClick={() => setLikes(likes + 1)} />
        </div>
    );
}

export default Card;