  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
export default function Gameboard({ onSelectSquare, turns }) {

    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const { square,player }  = turn;
        const { row,col } = square;
        gameBoard[row][col] = player;
        console.log('gameBoard',gameBoard);
    };

//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handelSelectSquare(rowIdx, colIdx) {
//     setGameBoard((prevGameBoard) => {
//       const newGameBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
//       console.log('newGameBoard',newGameBoard);
//       newGameBoard[rowIdx][colIdx] = activeSymbol;
//       return newGameBoard
//     });

//     onSelectSquare();
    return (
    <ol id="game-board">
        {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
            <ol>
            {row.map((playerSymbol, colIdx) => (
                <li key={colIdx}>
                {/* <button onClick={() => handelSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button> */}
                    <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
            ))}
            </ol>
        </li>
        ))}
    </ol>
    );
};


