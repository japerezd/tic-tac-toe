import './index.css';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [square, setSquare] = useState(Array(9).fill(''));
  const [isCircle, setIsCircle] = useState(true);
  const winner = calculateWinner(square);
  const gameOver = isGameOver();

  function nextPlayer() {
    return isCircle ? (
      <span className='circle'>O</span>
    ) : (
      <span className='ex'>X</span>
    );
  }

  function resetGame() {
    setSquare(Array(9).fill(''));
    setIsCircle(true);
  }

  function handleClick(i) {
    const board = [...square];
    if (winner || board[i]) return;
    board[i] = isCircle ? 'O' : 'X';
    setSquare(board);
    setIsCircle(!isCircle);
  }

  function isGameOver() {
    return square.filter(s => s !== '').length === square.length;
  }


  function calculateWinner(squares) {
    const winnerLines = [
      [0, 1, 2], //horizontal
      [3, 4, 5], //horizontal
      [6, 7, 8], //horizontal
      [0, 3, 6], //vertical
      [2, 5, 8], //vertical
      [0, 4, 8], //diagonal
      [2, 4, 6], //diagonal
    ];

    for (let index = 0; index < winnerLines.length; index++) {
      const [a, b, c] = winnerLines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className='box'>
        <Board squares={square} onClick={handleClick} />
      </div>
      <div className='data-container'>
        <div style={{'textAlign': 'center'}}>
          {winner ? (
            <p>
              Winner:{' '}
              <span className={winner === 'O' ? 'circle' : 'ex'}>{winner}</span>
            </p>
          ) : gameOver ? <p>No one won</p> :  (
            <p>Next Player: {nextPlayer()}</p>
          )}
          {(winner || gameOver) && <button className="btn" onClick={resetGame}>Play again!</button>}
        </div>
      </div>
    </>
  );
}

export default App;
