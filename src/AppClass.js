import React, { Component } from 'react'
import Box from './component/Box';

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

    play=(userChoice)=>{
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: (choice[userChoice]),
            computerSelect: (computerChoice),
            result: (this.judegement(choice[userChoice], computerChoice)),
            comresult: this.reverse(this.result),
        })
    }

    increase = () => {
        this.setState({counter2:this.state.counter2 + 1, value: this.state.value + 1});
        //증가를 이렇게 시킬 수 있다
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
          <Box className='main' title='Player' item={this.state.userSelect} result={this.state.result}/>
          <Box className='main' title='Computer' item={this.state.computerSelect} result={this.state.comresult}/>
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
