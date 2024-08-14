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
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/640px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg"
  },
  scissors:{
    name:"scissors",
    img:"https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_493,q_auto,w_875/c_pad,h_493,w_875/C0487101-01?pgw=1&pgwact=1"
  },
  paper:{
    name:"paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBJrv6z6L3ixesiVIZcOoPfzCrQmS0IsE3A&s"
  }
}
function App() {
  const[userSelect, setUserSelect] = useState(null);//버튼을 클릭하면 클릭한 값이 박스에 보임
  //초기에 null로 설정해서 초기값 못그리는 에러발생

  const[computerSelect, setComputerSelect] = useState(null);

  const[result, setResult] = useState("");

  const play=(userChoice)=>{
    // userSelect = choice[userChoice] 이렇게 업데이트 하는거 아님
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let result = judegement(choice[userChoice], computerChoice);
    setResult(result);
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
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("rock")}>rock</button>
        <button onClick={()=>play("scissors")}>scissors</button>
        <button onClick={()=>play("paper")}>paper</button>
      </div>
    </div>
  );
}

export default App;
