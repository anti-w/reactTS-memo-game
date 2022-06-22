import { useRef, useState } from "react";
import { duplicateRegenerateSortArray } from "../../utils/card-utils";
import { Card, CardProps } from "../Card";
import "./styles.css";

export interface GridProps {
  cards: CardProps[];
}

export const Grid = ({ cards }: GridProps) => {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));

    first.current = null;
    second.current = null;
    unflip.current = false;

    setMatches(0);
    setMoves(0);
  };

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      //se o id do cartão não for o id clicado, não fazer nada

      if (card.id !== id) return card;
      //se o cartão já estiver virado, não fazer nada
      if (card.flipped) return card;

      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }
      //Virar o card
      card.flipped = true;

      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          setMatches((m) => m + 1);
          first.current = null;
          second.current = null;
        } else {
          unflip.current = true;
        }
        setMoves((m) => m + 1);
      }

      return card;
    });

    setStateCards(newStateCards);
  };

  return (
    <>
      <div className="text">
        <h1>Memory Game </h1>

        <p>
          Movimentos: {moves} Pares: {matches}{" "}
          <button onClick={handleReset}>reset</button>
        </p>
      </div>

      <div className="grid">
        {stateCards.map((card) => (
          <Card {...card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};
