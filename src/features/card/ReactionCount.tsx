type reactionCountProps = {
  count: number;
};

export const ReactionCount = ({ count }: reactionCountProps) => {
  return <span>{count} Reactions</span>;
};

export default ReactionCount;