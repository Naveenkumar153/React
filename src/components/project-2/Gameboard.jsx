export default function Gameboard(props) {

    const initialGameBoard = [
        [null, null,null],
        [null, null,null],
        [null, null,null],
    ];

    return (
        <ol id="game-board">
            {
                initialGameBoard.map((row,rowIdx) => {;
                    <li key={rowIdx}>
                        <ol>
                            {
                                row.map((playerSymbol,colIdx) => {
                                    <li key={colIdx}>
                                       <button> {playerSymbol}</button>
                                    </li>
                                })
                            }
                        </ol>
                    </li>
                })
            }
        </ol>
    );
};