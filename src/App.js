import logo from './logo.svg';
import './App.css';
import MyForm from './componets/Lists'

function App() {

  
  return (
    <>
    <div className="App">
    <div className="gameContainer">
        <div className="gameOver">Welcome to iDragon Adventures</div>
        <div className="gameOver">Welcome to iDragon - Created by Jai</div> 
        <div className="dino"></div>
        <div id="scoreCont">Your Score: 0</div>
        <div className="obstacle obstacleAni"></div>
    </div>
    </div>
    </>
    
  );
  function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
  }
  }
export default App;
