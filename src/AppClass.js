import React, { Component } from 'react'
// import Box from './component/Box';
import "./App.css";
import BoxClass from "./component/BoxClass";

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

export default class AppClass extends Component {

    constructor(){
        super();
        this.state={
            userChoice: null,
            computerChoice: null,
            result: "", 
            comresult: ""
        }
    }

    play = (userChoice) => {
      const computerChoice = this.randomChoice();
      const user = choice[userChoice];
      const computer = computerChoice;
      const result = this.judegement(user, computer);
      const comresult = this.reverse(result);

      this.setState({
          userSelect: user,
          computerSelect: computer,
          result: result,
          comresult: comresult,
      });
  }

    reverse=(result)=>{
        if(result === "win"){
          return "lose"
        } else if(result === "lose") {
          return "win"
        } else {
          return "tie"
        }
    }

    judegement=(user, computer)=>{
        // console.log(user, computer); //user 랑 computer 는 object 이기 때문에
        if(user.name === computer.name){
          return "tie"
        } else if(user.name === "rock") return computer.name === "scissors" ? "win" : "lose"
        else if(user.name === "paper") return computer.name === "scissors" ? "lose" : "win"
        else if(user.name === "scissors") return computer.name === "rock" ? "lose" : "win"
    }

    randomChoice=()=>{
        let itemArrary = Object.keys(choice);//객체의 key 값만 뽑아서 array로 만들어 준다
        // console.log(itemArrary);
        let randomNum = Math.floor(Math.random() * itemArrary.length);//랜덤값은 0~1 사이인데 길이 곱해서 앞자리수만 가져오기
        // console.log(randomItem);
        let finalItem = itemArrary[randomNum];
        // console.log(finalItem);
        return choice[finalItem];
    }


  render() {
    return (
        <div className='background'>
        <div className='main'>
          <BoxClass className='main' title='Player' item={this.state.userSelect} result={this.state.result}/>
          <BoxClass className='main' title='Computer' item={this.state.computerSelect} result={this.state.comresult}/>
        </div>
        <div className='main button_container'>
          <button className='btn-5' onClick={()=>this.play("rock")}>rock</button>
          <button onClick={()=>this.play("scissors")}>scissors</button>
          <button onClick={()=>this.play("paper")}>paper</button>
        </div>
      </div>
    )
  }
}
