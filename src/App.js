import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"

//2 boxes (title, pic, result)
//가위바위보 버튼이 있다
//버튼을 클릭하면 클릭한 값이 박스에 보임
//컴퓨터는 랜덤하게 아이탬 선택
//3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//승패 결과에 따라 테두리 색이 바뀐다

const choice = {
  rock:{
    name:"rock",
    img:"https://i.pinimg.com/originals/91/d1/38/91d138b2728e673eb7aa3ca68367357c.png"
  },
  scissors:{
    name:"scissors",
    img:"https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/hand-scissors-512.png"
  },
  paper:{
    name:"paper",
    img:"https://static.thenounproject.com/png/477922-200.png"
  }
}
function App() {
  const[userSelect, setUserSelect] = useState(null);//버튼을 클릭하면 클릭한 값이 박스에 보임
  //초기에 null로 설정해서 초기값 못그리는 에러발생
  const[computerSelect, setComputerSelect] = useState(null);
  const[result, setResult] = useState("");
  const[comresult, setComResult] = useState("");

  const play=(userChoice)=>{
    // userSelect = choice[userChoice] 이렇게 업데이트 하는거 아님
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let result = judegement(choice[userChoice], computerChoice);
    setResult(result);
    let comresult = reverse(result);
    setComResult(comresult);
  }

  const reverse=(result)=>{
    if(result === "win"){
      return "lose"
    } else if(result === "lose") {
      return "win"
    } else {
      return "tie"
    }
  }

  const judegement=(user, computer)=>{
    console.log(user, computer); //user 랑 computer 는 object 이기 때문에
    if(user.name === computer.name){
      return "tie"
    } else if(user.name === "rock") return computer.name === "scissors" ? "win" : "lose"
    else if(user.name === "paper") return computer.name === "scissors" ? "lose" : "win"
    else if(user.name === "scissors") return computer.name === "rock" ? "lose" : "win"
  }

  const randomChoice=()=>{
    let itemArrary = Object.keys(choice);//객체의 key 값만 뽑아서 array로 만들어 준다
    // console.log(itemArrary);
    let randomNum = Math.floor(Math.random() * itemArrary.length);//랜덤값은 0~1 사이인데 길이 곱해서 앞자리수만 가져오기
    // console.log(randomItem);
    let finalItem = itemArrary[randomNum];
    // console.log(finalItem);
    return choice[finalItem];
  }

  return (
    <div className='background'>
      <div className='main'>
        <Box className='main' title='Player' item={userSelect} result={result}/>
        <Box className='main' title='Computer' item={computerSelect} result={comresult}/>
      </div>
      <div className='main button_container'>
        <button className='btn-5' onClick={()=>play("rock")}>rock</button>
        <button onClick={()=>play("scissors")}>scissors</button>
        <button onClick={()=>play("paper")}>paper</button>
      </div>
    </div>
  );
}

export default App;
