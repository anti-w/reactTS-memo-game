import { CardProps } from "../components/Card";

const keyGen = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const duplicateArray = <T>(array: T[]): T[] => {
  return [...array, ...array];
};

export const sorArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (cards: CardProps[]): CardProps[] => {
  return cards.map((card) => ({ ...card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (
  cards: CardProps[]
): CardProps[] => {
  return sorArray(duplicateArray(cards));
};
