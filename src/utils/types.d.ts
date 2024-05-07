interface IBoardProps {
  isReady: boolean;
  handleVote: (color: 'first' | 'second') => void;
  player: 'first' | 'second';
  customBoardColor: string;
  inverted?: boolean;
  gameStatus: (typeof GAME_STATES)[keyof typeof GAME_STATES];
}

interface IPositions {
  x: number;
  y: number;
}
