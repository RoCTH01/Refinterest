type reactionButtonProps = {
    onClick: () => void;
    reaction: string;
    count: number;
};

function ReactionButton(props: reactionButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.reaction} {props.count}
        </button>
    );
}

export default ReactionButton;