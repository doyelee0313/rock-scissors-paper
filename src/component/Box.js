import React from 'react'

const Box = (props) => {
  let result = props.result;
  return (
    <div className={`box ${result} main`}>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img}/>
        {/* null 이 입력되면 props.item 이 false 라서 && 기호가 말이됨 */}
        <p className='${result}'>{props.result}</p>
    </div>
  )
}

export default Box