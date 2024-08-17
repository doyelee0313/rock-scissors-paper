import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor(props){
        super();
        this.result = "";
    }
  render() {
    return(
    <div className={`box ${this.props.result} main`}>
        <h1>{this.props.title}</h1>
        <img className='item-img' src={this.props.item && this.props.item.img}/>
        {/* null 이 입력되면 props.item 이 false 라서 && 기호가 말이됨 */}
        <p className={this.result}>{this.props.result}</p>
    </div>
    )
  }
}
