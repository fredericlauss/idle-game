import '../App.css';


function WinnerBoard(props) {


  return (
    <div className='winnerBoard'>
        <h1>{props.winner} has win ! </h1>
    </div>
  );
}

export default WinnerBoard;