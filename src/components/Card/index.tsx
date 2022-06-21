import "./styles.css";

export interface CardProps {
  id: string;
  back: string;
  flipped?: boolean;
  handleClick?: (id: string) => void;
}

export const Card = ({ flipped = false, back, id, handleClick }: CardProps) => {
  const cardContentClassNames = ["card_content"];
  flipped && cardContentClassNames.push("card_content-flipped");

  const handleClickFn = (id: string) => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <div onClick={() => handleClickFn(id)} className="card">
      <div className={cardContentClassNames.join(" ")}>
        <div className="card_face card_face-front">?</div>
        <div className="card_face card_face-back">{back}</div>
      </div>
    </div>
  );
};
